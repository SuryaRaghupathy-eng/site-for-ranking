import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Search, Building2, MapPin, Mail, Phone, User } from "lucide-react";
import { RankingTypeToggle } from "@/components/RankingTypeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { locations } from "@/lib/locations";
import { insertRankTrackingRequestSchema, insertContactSubmissionSchema } from "@shared/schema";
import type { InsertRankTrackingRequest, InsertContactSubmission } from "@shared/schema";
import { z } from "zod";

const rankTrackingFormSchema = insertRankTrackingRequestSchema.extend({
  keyword: z.string().min(1, "Keyword is required"),
  brandName: z.string().min(1, "Brand name is required"),
  branch: z.string().min(1, "Branch is required"),
  location: z.string().min(1, "Location is required"),
});

const contactFormSchema = insertContactSubmissionSchema.extend({
  name: z.string().min(1, "Name is required"),
});

export default function Home() {
  const [rankingType, setRankingType] = useState<"local" | "organic">("local");
  const { toast } = useToast();

  const rankTrackingForm = useForm<InsertRankTrackingRequest>({
    resolver: zodResolver(rankTrackingFormSchema),
    defaultValues: {
      rankingType: "local",
      keyword: "",
      brandName: "",
      branch: "",
      location: locations[0].name,
      locationCode: locations[0].code,
    },
  });

  const contactForm = useForm<InsertContactSubmission>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
    },
  });

  const rankTrackingMutation = useMutation({
    mutationFn: async (data: InsertRankTrackingRequest) => {
      return apiRequest("POST", "/api/rank-tracking", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your rank tracking request has been submitted successfully.",
      });
      rankTrackingForm.reset({
        rankingType: rankingType,
        keyword: "",
        brandName: "",
        branch: "",
        location: locations[0].name,
        locationCode: locations[0].code,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit rank tracking request",
        variant: "destructive",
      });
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you! We'll send you 10 free keyword rankings soon.",
      });
      contactForm.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit contact form",
        variant: "destructive",
      });
    },
  });

  const handleRankingTypeChange = (type: "local" | "organic") => {
    setRankingType(type);
    rankTrackingForm.setValue("rankingType", type);
  };


  const onRankTrackingSubmit = (data: InsertRankTrackingRequest) => {
    rankTrackingMutation.mutate(data);
  };

  const onContactSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                R
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">RankCascade</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6">
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Track Your Rankings with Precision
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor your keyword performance across local and organic search results with our powerful rank tracking tool.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={rankTrackingForm.handleSubmit(onRankTrackingSubmit)} className="space-y-8">
                  <div className="flex justify-center mb-8">
                    <RankingTypeToggle value={rankingType} onChange={handleRankingTypeChange} />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="keyword" className="text-base font-medium mb-2 block">
                        Keyword
                      </Label>
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="keyword"
                          data-testid="input-keyword"
                          placeholder="Enter your target keyword"
                          className="pl-12 h-14 text-base"
                          {...rankTrackingForm.register("keyword")}
                        />
                      </div>
                      {rankTrackingForm.formState.errors.keyword && (
                        <p className="text-sm text-destructive mt-1">
                          {rankTrackingForm.formState.errors.keyword.message}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="brandName" className="text-base font-medium mb-2 block">
                          Brand Name
                        </Label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="brandName"
                            data-testid="input-brand-name"
                            placeholder="Your brand name"
                            className="pl-12 h-14 text-base"
                            {...rankTrackingForm.register("brandName")}
                          />
                        </div>
                        {rankTrackingForm.formState.errors.brandName && (
                          <p className="text-sm text-destructive mt-1">
                            {rankTrackingForm.formState.errors.brandName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="branch" className="text-base font-medium mb-2 block">
                          Branch
                        </Label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="branch"
                            data-testid="input-branch"
                            placeholder="Branch location"
                            className="pl-12 h-14 text-base"
                            {...rankTrackingForm.register("branch")}
                          />
                        </div>
                        {rankTrackingForm.formState.errors.branch && (
                          <p className="text-sm text-destructive mt-1">
                            {rankTrackingForm.formState.errors.branch.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-base font-medium mb-2 block">
                        Location (GL Code)
                      </Label>
                      <Controller
                        name="location"
                        control={rankTrackingForm.control}
                        render={({ field }) => (
                          <Select
                            onValueChange={(displayName) => {
                              const location = locations.find((loc) => loc.displayName === displayName);
                              if (location) {
                                field.onChange(location.name);
                                rankTrackingForm.setValue("locationCode", location.code);
                              }
                            }}
                            value={locations.find((loc) => loc.name === field.value)?.displayName}
                          >
                            <SelectTrigger
                              id="location"
                              data-testid="select-location"
                              className="h-14 text-base"
                            >
                              <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                            <SelectContent>
                              {locations.map((location) => (
                                <SelectItem
                                  key={location.code}
                                  value={location.displayName}
                                  data-testid={`location-${location.code}`}
                                >
                                  {location.displayName}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {rankTrackingForm.formState.errors.location && (
                        <p className="text-sm text-destructive mt-1">
                          {rankTrackingForm.formState.errors.location.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-start">
                    <Button
                      type="submit"
                      size="lg"
                      data-testid="button-check-rankings"
                      disabled={rankTrackingMutation.isPending}
                      className="w-full md:w-auto font-semibold"
                    >
                      {rankTrackingMutation.isPending ? "Submitting..." : "Check Rankings"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Get 10 More Keyword Rankings for Free
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Start tracking more keywords at no cost. No credit card required.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium mb-2 block">
                      Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="name"
                        data-testid="input-name"
                        placeholder="Your full name"
                        className="pl-12 h-14 text-base"
                        {...contactForm.register("name")}
                      />
                    </div>
                    {contactForm.formState.errors.name && (
                      <p className="text-sm text-destructive mt-1">
                        {contactForm.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium mb-2 block">
                      Email ID
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        data-testid="input-email"
                        placeholder="your.email@example.com"
                        className="pl-12 h-14 text-base"
                        {...contactForm.register("email")}
                      />
                    </div>
                    {contactForm.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {contactForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="contactNumber" className="text-base font-medium mb-2 block">
                      Contact Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="contactNumber"
                        type="tel"
                        data-testid="input-contact-number"
                        placeholder="+1 (555) 123-4567"
                        pattern="\d{10,}"
                        minLength={10}
                        className="pl-12 h-14 text-base"
                        {...contactForm.register("contactNumber")}
                      />
                    </div>
                    {contactForm.formState.errors.contactNumber && (
                      <p className="text-sm text-destructive mt-1">
                        {contactForm.formState.errors.contactNumber.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-center md:justify-start">
                    <Button
                      type="submit"
                      size="lg"
                      data-testid="button-submit-contact"
                      disabled={contactMutation.isPending}
                      className="w-full md:w-auto font-semibold"
                    >
                      {contactMutation.isPending ? "Submitting..." : "Get Free Rankings"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="py-8 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 RankCascade. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
