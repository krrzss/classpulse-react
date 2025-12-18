import DashboardLayout from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { studentData } from "@/lib/mockData";
import { ArrowRight, BookOpen, BrainCircuit, Lightbulb, Target } from "lucide-react";

export default function Recommendations() {
  return (
    <DashboardLayout>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <BrainCircuit className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-heading tracking-tight">AI Insights</h2>
            <p className="text-muted-foreground">Personalized recommendations to help you improve.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main AI Summary */}
        <Card className="lg:col-span-3 border-primary/20 bg-linear-to-br from-primary/5 via-background to-background">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Weekly Focus Area
            </CardTitle>
            <CardDescription>Based on your performance in the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Boost your Chemistry scores</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We've noticed a slight dip in your Science performance, specifically in organic chemistry topics. 
                  Dedicating 30 minutes extra this week could bring your average back up to an A.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="px-3 py-1">Science</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Chemistry</Badge>
                  <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary">High Priority</Badge>
                </div>
              </div>
              <div className="w-full md:w-auto min-w-[200px] p-4 bg-background rounded-xl border shadow-sm">
                <h4 className="font-semibold mb-3 text-sm uppercase text-muted-foreground tracking-wider">Suggested Actions</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Review Chapter 4 Summary
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Take Practice Quiz #3
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Watch "Organic Bonds" Video
                  </li>
                </ul>
                <Button className="w-full mt-4" size="sm">Start Learning</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Recommendations List */}
        {studentData.recommendations.map((rec) => (
          <Card key={rec.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className={
                  rec.priority === "High" ? "border-red-200 text-red-600 bg-red-50" :
                  rec.priority === "Medium" ? "border-yellow-200 text-yellow-600 bg-yellow-50" :
                  "border-blue-200 text-blue-600 bg-blue-50"
                }>
                  {rec.priority} Priority
                </Badge>
                <span className="text-xs text-muted-foreground">{rec.type}</span>
              </div>
              <CardTitle className="text-lg">{rec.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {rec.description}
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" className="w-full justify-between group px-0 hover:bg-transparent hover:text-primary">
                View Details 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}

        {/* Study Habits Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Study Habit Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-green-50/50 border border-green-100">
                <h4 className="font-semibold text-green-800 mb-1">What's Working</h4>
                <ul className="space-y-2 mt-2">
                  <li className="text-sm text-green-700 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                    Completing math assignments on time
                  </li>
                  <li className="text-sm text-green-700 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                    Consistent morning attendance
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-orange-50/50 border border-orange-100">
                <h4 className="font-semibold text-orange-800 mb-1">Needs Attention</h4>
                <ul className="space-y-2 mt-2">
                  <li className="text-sm text-orange-700 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                    Late night study sessions impacting focus
                  </li>
                  <li className="text-sm text-orange-700 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                    Low participation in History discussions
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1 bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Daily Tip</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-lg italic font-medium leading-relaxed opacity-90">
              "Spaced repetition is key. Review your notes 10 minutes after class, then again 24 hours later."
            </blockquote>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full">Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
}
import { CheckCircle2, AlertTriangle } from "lucide-react";
