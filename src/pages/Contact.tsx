import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Clock, Phone, Send, Sparkles, MapPin, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/emailjs";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendContactEmail(formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", businessName: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "021 515 047",
      href: "tel:021515047",
      isLink: true,
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@liquorconcepts.co.nz",
      href: "mailto:hello@liquorconcepts.co.nz",
      isLink: true,
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday\n8:00 AM - 5:00 PM",
      isLink: false,
    },
    {
      icon: MapPin,
      title: "Mailing Address",
      content: "PO Box 47 348\nPonsonby 1144",
      isLink: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact Liquor Concepts | Liquor License Consultants NZ"
        description="Get in touch with our liquor licensing experts. Free consultation for liquor license applications, manager certificates, and renewals across New Zealand."
        keywords="contact liquor license consultant NZ, liquor licensing help, free consultation"
        canonicalUrl="/contact"
      />
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-gold-subtle" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Free Consultation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get In
                <span className="block bg-gradient-gold bg-clip-text text-transparent mt-2">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to start your liquor license application? Let's discuss your needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-0 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl overflow-hidden animate-slide-up">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <CardContent className="relative p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                      <Send className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Send a Message</h2>
                      <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        placeholder="Your business name"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your licensing needs (e.g., new license, renewal, manager certificate)"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                      />
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
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <Card
                      key={info.title}
                      className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
                    >
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-[1px] rounded-lg bg-card" />
                      
                      <CardContent className="relative p-6">
                        <div className="flex items-start gap-5">
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 w-14 h-14 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition-all duration-500" />
                            <div className="relative w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Icon className="h-7 w-7 text-primary-foreground" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                              {info.title}
                            </h3>
                            {info.isLink ? (
                              <a 
                                href={info.href}
                                className="text-muted-foreground hover:text-primary transition-colors text-lg"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground whitespace-pre-line">
                                {info.content}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                {/* Additional Info Card */}
                <Card className="border-0 bg-gradient-to-br from-primary/10 via-card to-primary/5 shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3">Why Contact Us?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {[
                        "Free initial consultation",
                        "Expert advice on all license types",
                        "98% success rate on applications",
                        "Over 24 years of experience",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
