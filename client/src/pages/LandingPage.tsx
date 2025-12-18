import LandingLayout from "@/components/layout/LandingLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  BrainCircuit, 
  CheckCircle, 
  LineChart, 
  ShieldCheck, 
  Users,
  LayoutDashboard
} from "lucide-react";
import heroImage from "@assets/generated_images/futuristic_education_dashboard_concept_background.png";
import { Link } from "wouter";

export default function LandingPage() {
  return (
    <LandingLayout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8 animate-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                New: AI-Powered Insights
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-foreground">
                ClassPulse: <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Unlock Every Student's Potential</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Go beyond attendance. Track performance, behavior, and engagement with ClassPulse's AI-driven analytics platform designed for modern education.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/login">
                  <Button size="lg" className="text-lg px-8 h-14 shadow-lg shadow-primary/25">
                    Get Started
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-primary/20 hover:bg-primary/5">
                  View Demo
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-8 text-muted-foreground">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold bg-white shadow-sm">
                      <img src={`https://github.com/shadcn.png?s=${i}`} alt="user" className="rounded-full" />
                    </div>
                  ))}
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    +2k
                  </div>
                </div>
                <p className="text-sm font-medium">Trusted by 50+ Schools with ClassPulse</p>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative animate-in slide-in-from-right duration-700 delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-video glass-card">
                 <img 
                   src={heroImage} 
                   alt="Dashboard Preview" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating Cards */}
              <Card className="absolute -bottom-8 -left-8 w-64 shadow-xl animate-in fade-in zoom-in duration-1000 delay-500 hidden md:block border-primary/10">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Performance</p>
                    <p className="text-xl font-bold text-foreground">+12.5% <span className="text-xs font-normal text-green-600">vs last month</span></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -top-8 -right-8 w-56 shadow-xl animate-in fade-in zoom-in duration-1000 delay-700 hidden md:block border-primary/10">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">AI Insight</p>
                    <p className="text-sm font-semibold">Risk Level: Low</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-blue-400/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/4"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Everything you need to succeed</h2>
            <p className="text-lg text-muted-foreground">
              Our platform provides comprehensive tools for students, teachers, and administrators to monitor and improve academic performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Track attendance, grades, and participation trends instantly with beautiful interactive charts."
              },
              {
                icon: BrainCircuit,
                title: "AI Recommendations",
                description: "Get personalized study tips and improvement strategies based on machine learning analysis."
              },
              {
                icon: ShieldCheck,
                title: "Risk Detection",
                description: "Early warning system that identifies students at risk of falling behind before it's too late."
              },
              {
                icon: CheckCircle,
                title: "Assignment Tracking",
                description: "Never miss a deadline. Keep track of all assignments, projects, and exams in one place."
              },
              {
                icon: Users,
                title: "Behavioral Insights",
                description: "Monitor participation and behavioral trends to ensure holistic student development."
              },
              {
                icon: LayoutDashboard,
                title: "Unified Dashboard",
                description: "All your data in one clean, organized view. Access everything you need with just one click."
              }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-foreground max-w-3xl mx-auto">
                Ready to transform your educational journey?
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Join thousands of students and teachers using ClassPulse to achieve better results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/login">
                  <Button size="lg" variant="secondary" className="h-14 px-8 text-lg text-primary font-semibold">
                    Start Learning Now
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
