import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gift, Users, CheckCircle2, Sparkles, Send, FileText, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import SEO from "@/components/SEO";
import { sendReferralEmail } from "@/lib/emailjs";

const Referrals = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    businessName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendReferralEmail(formData);
      toast({
        title: "Referral Submitted!",
        description: "Thank you for your referral. We'll be in touch soon.",
      });
      setFormData({
        referrerName: "",
        referrerEmail: "",
        referrerPhone: "",
        businessName: "",
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        notes: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to submit referral. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: Users,
      title: "Help Others",
      description: "Share expert licensing services with businesses that need them",
    },
    {
      icon: Gift,
      title: "Get Rewarded",
      description: "Receive a generous thank-you gift for each successful referral",
    },
    {
      icon: CheckCircle2,
      title: "No Limits",
      description: "Refer as many businesses as you like—we'll reward each one",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Referral Program | Liquor Concepts NZ"
        description="Refer businesses that need liquor licensing help and get rewarded. Our referral program thanks you for every successful client referral with a special gift."
        keywords="liquor license referral program, refer liquor licensing clients, Liquor Concepts referral NZ"
        canonicalUrl="/referrals"
      />
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-gold-subtle" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Earn Rewards</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Referral
                <span className="flex items-center justify-center gap-4 mt-2">
                  <span className="bg-gradient-gold bg-clip-text text-transparent">Program</span>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 w-14 h-14 bg-primary/20 rounded-xl blur-lg" />
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center">
                      <Gift className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Do you know a business that needs liquor licensing help? Share the expertise 
                and we'll reward you for every successful referral.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={benefit.title}
                    className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-slide-up overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-[1px] rounded-lg bg-card" />
                    
                    <CardContent className="relative p-8 text-center">
                      <div className="relative mx-auto mb-6 w-16 h-16">
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition-all duration-500" />
                        <div className="relative w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Referral Form Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Card className="border-0 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <CardContent className="relative p-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
                      <Send className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Quick & Easy</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Submit a Referral</h2>
                    <p className="text-muted-foreground">
                      Complete the form below and we'll do the rest. For every business you refer 
                      that becomes an active client, we'll send you a special thank-you gift.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Your Details */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold">Your Details</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="referrerName">Your Name *</Label>
                          <Input
                            id="referrerName"
                            name="referrerName"
                            value={formData.referrerName}
                            onChange={handleChange}
                            required
                            className="bg-background/50 border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="referrerEmail">Your Email *</Label>
                          <Input
                            id="referrerEmail"
                            name="referrerEmail"
                            type="email"
                            value={formData.referrerEmail}
                            onChange={handleChange}
                            required
                            className="bg-background/50 border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="referrerPhone">Your Phone</Label>
                        <Input
                          id="referrerPhone"
                          name="referrerPhone"
                          type="tel"
                          value={formData.referrerPhone}
                          onChange={handleChange}
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Referral Details */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                          <Gift className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold">Referral Details</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="businessName">Business Name *</Label>
                          <Input
                            id="businessName"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                            className="bg-background/50 border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="contactName">Contact Name *</Label>
                            <Input
                              id="contactName"
                              name="contactName"
                              value={formData.contactName}
                              onChange={handleChange}
                              required
                              className="bg-background/50 border-border/50 focus:border-primary"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contactEmail">Contact Email *</Label>
                            <Input
                              id="contactEmail"
                              name="contactEmail"
                              type="email"
                              value={formData.contactEmail}
                              onChange={handleChange}
                              required
                              className="bg-background/50 border-border/50 focus:border-primary"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactPhone">Contact Phone</Label>
                          <Input
                            id="contactPhone"
                            name="contactPhone"
                            type="tel"
                            value={formData.contactPhone}
                            onChange={handleChange}
                            className="bg-background/50 border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="notes">Additional Information</Label>
                          <Textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Tell us about their licensing needs..."
                            rows={4}
                            className="bg-background/50 border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Referral
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Terms & Conditions */}
              <Card className="mt-8 border-0 bg-card shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Referral Terms & Conditions</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The Liquor Concepts Referral Program makes it easy to share our services 
                      with your network and get rewarded at the same time. For every business 
                      that you refer that becomes a paying client, you will be eligible for a 
                      thank-you gift.
                    </p>
                    <p className="font-semibold text-foreground">The following terms apply:</p>
                    <ul className="space-y-3">
                      {[
                        "You acknowledge and agree that we may disclose your name to your referrals as the referrer.",
                        "As the referrer, you will receive a gift for each new client you have referred who has engaged our services and paid their first invoice.",
                        "Referral program rewards do not count for referrals that may have been made prior to the launch of this program.",
                        "Referral accounts that are cancelled by Liquor Concepts for any reason (non-compliance with our terms of service) will not be included in the program.",
                        "Liquor Concepts reserves the right to modify or discontinue the referral program at any time.",
                        "Self-referrals and referrals of businesses already in discussion with Liquor Concepts are not eligible.",
                      ].map((term, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Referrals;
