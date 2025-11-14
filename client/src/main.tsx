import { trpc } from "@/lib/trpc";
import { UNAUTHED_ERR_MSG } from '@shared/const';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, TRPCClientError } from "@trpc/client";
import { createRoot } from "react-dom/client";
import superjson from "superjson";
import App from "./App";
import {
  getLoginUrl,
  APP_TITLE,
  APP_LOGO,
  ANALYTICS_ENDPOINT,
  ANALYTICS_WEBSITE_ID,
} from "./const";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 },
  },
});

const redirectToLoginIfUnauthorized = (error: unknown) => {
  if (!(error instanceof TRPCClientError)) return;
  if (typeof window === "undefined") return;

  const isUnauthorized = error.message === UNAUTHED_ERR_MSG;

  if (!isUnauthorized) return;

  window.location.href = getLoginUrl();
};

queryClient.getQueryCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.query.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Query Error]", error);
  }
});

queryClient.getMutationCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.mutation.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Mutation Error]", error);
  }
});

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "/api/trpc",
      transformer: superjson,
      fetch(input, init) {
        return globalThis.fetch(input, {
          ...(init ?? {}),
          credentials: "include",
        });
      },
    }),
  ],
});

if (typeof document !== "undefined") {
  document.title = APP_TITLE;

  const iconSelectors = [
    'link[rel="icon"]',
    'link[rel="apple-touch-icon"]',
  ];
  iconSelectors.forEach(selector => {
    const el = document.querySelector<HTMLLinkElement>(selector);
    if (el) {
      el.href = APP_LOGO;
    }
  });

  if (ANALYTICS_ENDPOINT && ANALYTICS_WEBSITE_ID) {
    const existingAnalyticsScript = document.querySelector<HTMLScriptElement>(
      'script[data-analytics="umami"]'
    );
    if (!existingAnalyticsScript) {
      const script = document.createElement("script");
      script.defer = true;
      const endpoint = ANALYTICS_ENDPOINT.replace(/\/$/, "");
      script.src = `${endpoint}/umami`;
      script.dataset.websiteId = ANALYTICS_WEBSITE_ID;
      script.dataset.analytics = "umami";
      document.head.appendChild(script);
    }
  }
}

createRoot(document.getElementById("root")!).render(
  <trpc.Provider client={trpcClient} queryClient={queryClient as any}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </trpc.Provider>
);
