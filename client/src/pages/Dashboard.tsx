import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, Mail, CheckCircle2 } from "lucide-react";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isVerified: boolean;
}

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const { data, isLoading } = useQuery<{ user: User }>({
    queryKey: ["/api/auth/me"],
  });

  const logoutMutation = useMutation({
    mutationFn: () => apiRequest("/api/auth/logout", {
      method: "POST",
    }),
    onSuccess: () => {
      queryClient.clear();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
      });
      setLocation("/login");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!data?.user) {
    setLocation("/login");
    return null;
  }

  const { user } = data;
  const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              R
            </div>
            <h1 className="text-xl font-bold text-foreground">RankCascade</h1>
          </div>
          
          <Button
            variant="ghost"
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground" data-testid="text-dashboard-title">
              Welcome back, {user.firstName}!
            </h2>
            <p className="text-muted-foreground mt-2">
              Manage your account and track your local rankings
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card data-testid="card-profile">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl font-semibold">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground" data-testid="text-user-name">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="text-user-email">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2">
                    {user.isVerified ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium" data-testid="text-verified-status">
                          Email Verified
                        </span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        <span className="text-sm text-orange-600 dark:text-orange-400 font-medium" data-testid="text-unverified-status">
                          Email Not Verified
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-quick-stats">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Campaigns</span>
                    <span className="text-2xl font-bold text-foreground">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Keywords Tracked</span>
                    <span className="text-2xl font-bold text-foreground">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Locations Monitored</span>
                    <span className="text-2xl font-bold text-foreground">0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card data-testid="card-get-started">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Start tracking your local rankings to dominate local search results.
              </p>
              <Button data-testid="button-start-tracking" className="w-full sm:w-auto">
                Start Tracking Rankings
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
