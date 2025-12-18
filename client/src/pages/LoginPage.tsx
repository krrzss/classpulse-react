import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Loader2, Lock, User, Info } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLocation("/student/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/20 p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      
      <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-4 shadow-lg shadow-primary/30">
            <Zap className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold font-heading tracking-tight">ClassPulse</h1>
          <p className="text-muted-foreground">Feel the pulse of your learning journey</p>
        </div>

        <Card className="border-muted/40 shadow-xl">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Access your dashboard with your credentials.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="teacher">Teacher</TabsTrigger>
              </TabsList>
              
              <TabsContent value="student">
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* Demo Credentials Info */}
                  <Alert className="border-primary/20 bg-primary/5">
                    <Info className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-sm">
                      <strong>Demo Mode:</strong> This shows a single student's view. Credentials are pre-filled below.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-2">
                    <Label htmlFor="student-id">Student ID</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="student-id" 
                        placeholder="ST-2024-XXX" 
                        className="pl-10" 
                        required 
                        defaultValue="ST-2024-001"
                        readOnly
                        title="This is a demo account for Alex Johnson"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Demo: Student ID ST-2024-001 (Alex Johnson)</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••" 
                        className="pl-10" 
                        required 
                        defaultValue="password"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Demo password: password</p>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="teacher">
                <div className="text-center py-8 space-y-4">
                  <p className="text-muted-foreground text-sm">Teacher portal coming soon! 🚀</p>
                  <Button variant="outline" className="w-full" disabled>Teacher Login</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 border-t p-4">
            <p className="text-xs text-muted-foreground text-center">
              💡 <strong>Note:</strong> In production, each student would have their own unique credentials and see only their own data.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
