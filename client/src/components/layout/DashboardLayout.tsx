import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  LineChart, 
  Lightbulb, 
  LogOut, 
  Bell,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { studentData } from "@/lib/mockData";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const menuItems = [
    { name: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
    { name: "Analytics", href: "/student/analytics", icon: LineChart },
    { name: "Insights", href: "/student/recommendations", icon: Lightbulb },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/20">
        <Sidebar collapsible="icon">
          <SidebarHeader className="h-16 border-b flex items-center justify-center px-4">
            <div className="flex items-center gap-2 w-full overflow-hidden transition-all duration-300 group-data-[collapsible=icon]:justify-center">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary to-secondary text-white shrink-0">
                <Zap className="h-4 w-4" />
              </div>
              <span className="font-bold font-heading text-lg group-data-[collapsible=icon]:hidden bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ClassPulse</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-2">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location === item.href}
                    tooltip={item.name}
                    className="h-12"
                  >
                    <Link href={item.href}>
                      <item.icon className="!h-5 !w-5" />
                      <span className="text-base font-medium">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="p-4 border-t">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Logout">
                  <Link href="/">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col min-h-0">
          <header className="h-16 border-b bg-background flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-lg font-semibold text-muted-foreground hidden sm:block">
                Hey, {studentData.name.split(' ')[0]}! 👋
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"></span>
              </Button>
              
              <div className="flex items-center gap-3 pl-4 border-l">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium leading-none">{studentData.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{studentData.grade}</p>
                </div>
                <Avatar>
                  <AvatarImage src={studentData.avatar} />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
