import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { studentData } from "@/lib/mockData";
import { 
  AlertTriangle, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Zap
} from "lucide-react";
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";
import { Link } from "wouter";

export default function Dashboard() {
  const riskColor = 
    studentData.riskLevel === "Low" ? "text-green-600 bg-green-100" :
    studentData.riskLevel === "Medium" ? "text-yellow-600 bg-yellow-100" : 
    "text-red-600 bg-red-100";

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold font-heading tracking-tight">Your Academic Pulse</h2>
          <p className="text-muted-foreground">Track your performance, progress, and potential.</p>
        </div>
        <div className={`px-4 py-2 rounded-full font-medium flex items-center gap-2 ${riskColor}`}>
          <Zap className="h-4 w-4" />
          Status: {studentData.riskLevel} Risk
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{studentData.attendance}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-secondary font-medium">+2%</span> this week
            </p>
            <Progress value={studentData.attendance} className="h-1 mt-3" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Participation</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{studentData.participationScore}/100</div>
            <p className="text-xs text-muted-foreground mt-1">
              Top performer
            </p>
            <Progress value={studentData.participationScore} className="h-1 mt-3" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Behavior</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{studentData.behavioralScore}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Excellent standing
            </p>
            <Progress value={studentData.behavioralScore} className="h-1 mt-3" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {studentData.assignments.filter(a => a.status !== "Completed").length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Tasks this week
            </p>
            <div className="h-1 mt-3 bg-muted rounded-full overflow-hidden">
               <div className="h-full bg-accent w-[40%]"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Main Chart */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>Your current standing across all subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={studentData.subjects}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)} 
                  />
                  <YAxis 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `${value}%`} 
                  />
                  <Tooltip 
                    cursor={{ fill: 'hsl(var(--muted))' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Bar 
                    dataKey="score" 
                    fill="url(#gradientBar)" 
                    radius={[4, 4, 0, 0]} 
                    barSize={40}
                  />
                  <defs>
                    <linearGradient id="gradientBar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Assignments List */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Assignments</CardTitle>
            <CardDescription>Stay on top of deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {studentData.assignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{assignment.title}</p>
                      <p className="text-xs text-muted-foreground">{assignment.subject}</p>
                    </div>
                  </div>
                  <Badge variant={
                    assignment.status === "Completed" ? "default" : 
                    assignment.status === "Pending" ? "destructive" : "secondary"
                  }>
                    {assignment.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/student/analytics">View All</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* AI Insight Teaser */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">New AI Insight Available</h3>
              <p className="text-muted-foreground">ClassPulse detected patterns in your performance. Get personalized recommendations.</p>
            </div>
          </div>
          <Button asChild>
            <Link href="/student/recommendations">View Insight <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
