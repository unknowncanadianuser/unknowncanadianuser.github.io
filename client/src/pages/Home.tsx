import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  MapPin, 
  Users, 
  Calendar, 
  Shield, 
  Zap, 
  Database,
  Code,
  CheckCircle2,
  TrendingUp,
  Eye,
  Github,
  Download
} from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SportLink</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
              <a href="#technology" className="text-sm font-medium hover:text-primary transition-colors">Technology</a>
              <a href="#screenshots" className="text-sm font-medium hover:text-primary transition-colors">Screenshots</a>
              <a href="#testing" className="text-sm font-medium hover:text-primary transition-colors">Testing</a>
            </div>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent via-background to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2" variant="secondary">
              Native iOS App • Swift & SwiftUI
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Connect Through Sports
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              SportLink is a native iOS application that brings sports enthusiasts together. Create, discover, and join sports activities in your area with real-time updates and interactive maps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6" disabled>
                <Calendar className="w-5 h-5 mr-2" />
                Coming Summer 2026
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>iOS 17+</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Real-time Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Firebase Backend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to organize and participate in sports activities, built with native iOS performance and design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Complete Authentication</CardTitle>
                <CardDescription>
                  Secure user registration and login with Firebase Authentication. Manage profiles with sports preferences, availability schedules, and optional profile photos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>User Profiles</CardTitle>
                <CardDescription>
                  Personalized profiles displaying favorite sports, weekly availability, profile pictures, and activity history. Full profile management and customization.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Interactive Maps</CardTitle>
                <CardDescription>
                  Explore sports facilities with custom markers, multi-sport filters, date-based filtering, and adaptive zoom. Powered by Apple MapKit.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Search & Filter Activities</CardTitle>
                <CardDescription>
                  View activities as map markers or sortable lists. Filter by date, distance, and sport type. Exclude activities you've already organized or joined.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Create & Manage Activities</CardTitle>
                <CardDescription>
                  Structured activity creation with title, sport, location, date, time, participant limits, descriptions, and invitations. Automatic conflict detection and validation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Real-time Updates</CardTitle>
                <CardDescription>
                  Dynamic synchronization of activities and participation using Firebase Firestore. See changes instantly as they happen across all devices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Smart Recommendations</CardTitle>
                <CardDescription>
                  Personalized activity suggestions on the home screen, adaptable to your sports preferences and availability patterns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Accessibility Support</CardTitle>
                <CardDescription>
                  Full VoiceOver compatibility with descriptive labels on all interactive elements, ensuring an inclusive experience for all users.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Native iOS development leveraging the latest frameworks and cloud infrastructure for optimal performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Code className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-2xl">Native iOS Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Swift & SwiftUI</p>
                    <p className="text-sm text-muted-foreground">Modern declarative UI framework for fluid, native interfaces</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Xcode IDE</p>
                    <p className="text-sm text-muted-foreground">Real-time simulation and debugging capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">iOS 17+ Target</p>
                    <p className="text-sm text-muted-foreground">Simplified testing and access to latest platform features</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Native Components</p>
                    <p className="text-sm text-muted-foreground">Location services, notifications, and calendar integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-2xl">Cloud Backend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Firebase Authentication</p>
                    <p className="text-sm text-muted-foreground">Secure user authentication and session management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Cloud Firestore</p>
                    <p className="text-sm text-muted-foreground">NoSQL database with real-time synchronization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Firebase Storage</p>
                    <p className="text-sm text-muted-foreground">Scalable cloud storage for profile images and media</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Apple MapKit</p>
                    <p className="text-sm text-muted-foreground">Native map integration with sports facility data and location services</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Architecture Overview</CardTitle>
                <CardDescription>
                  Clean, modular architecture following iOS best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">AppEntry</p>
                    <p className="text-sm text-muted-foreground">Application initialization</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Authentication</p>
                    <p className="text-sm text-muted-foreground">Login & registration flows</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Core</p>
                    <p className="text-sm text-muted-foreground">Models, services & extensions</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Navigation</p>
                    <p className="text-sm text-muted-foreground">Home, Discover, Create, Bookings</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Resources</p>
                    <p className="text-sm text-muted-foreground">Assets & configuration</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Shared</p>
                    <p className="text-sm text-muted-foreground">Reusable components</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">App Screenshots</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the intuitive interface and seamless user experience of SportLink.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-accent/30 border-2">
              <CardContent className="p-12">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Smartphone className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Screenshots Gallery</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    This section is ready to showcase app screenshots including splash screen, home views, activity details, interactive maps, creation flows, registration process, and profile management.
                  </p>
                  <div className="pt-4">
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      Images can be added to this section
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Splash Screen",
                "Home Views",
                "Activity Details",
                "Interactive Map",
                "Create Activity",
                "User Registration",
                "Profile Management",
                "Filters & Search"
              ].map((item, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm font-medium text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Performance Section */}
      <section id="testing" className="py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Quality & Performance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rigorous testing and optimization ensure a reliable, performant experience across all supported devices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Unit & Functional Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive XCTest coverage including object conversion, distance calculations, ViewModel initialization, and critical user flows validation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  CPU usage maintained between 25-35% on 4 cores. Optimized RAM consumption during animations, view transitions, and map rendering.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Usability Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Real user testing with quantitative metrics (clicks, time, errors) and qualitative feedback to refine the experience.
                </p>
              </CardContent>
            </Card>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">SportLink</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              A native iOS app connecting sports enthusiasts • Built with Swift & Firebase
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 SportLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
