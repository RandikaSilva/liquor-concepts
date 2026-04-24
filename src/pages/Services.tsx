import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, UserCheck, Building2, Award, Calendar, Globe, Wine, Users, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ServiceDetail {
  icon: React.ElementType;
  title: string;
  description: string;
  fullDescription: string;
  needQuestion: string;
  needAnswer: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      icon: FileCheck,
      title: "On Licence",
      description: "Complete assistance for premises selling alcohol for consumption on-site such as bars, restaurants, and cafes",
      fullDescription: "An on-licence allows alcohol to be sold and supplied for drinking at the premises, such as a bar, restaurant, café, hotel, or function venue. It covers how alcohol is served, hours of operation, and host responsibility obligations for people consuming alcohol on site.",
      needQuestion: "Do you need this licence?",
      needAnswer: "You need an on-licence if you want people to be able to buy and drink alcohol at your business or event venue (rather than taking it away).",
    },
    {
      icon: Building2,
      title: "Off Licence",
      description: "Expert guidance for bottle stores, supermarkets, and retailers selling alcohol for off-premises consumption",
      fullDescription: "An off-licence allows alcohol to be sold for people to take away and drink somewhere else, for example from a bottle store, supermarket, online retailer, or cellar door. It sets the conditions for display, sales methods, delivery, and trading hours for take-home alcohol.",
      needQuestion: "Do you need this licence?",
      needAnswer: "You need an off-licence if your business sells alcohol for customers to remove from the premises, including online or delivery-only bottle store models.",
    },
    {
      icon: Calendar,
      title: "Special Licence",
      description: "Fast-tracked applications for one-off events and special occasions requiring temporary alcohol sales",
      fullDescription: "A special licence is for specific events or occasions, such as weddings, festivals, race meetings, or one-off functions that are not already covered by an existing licence. It authorises the sale or supply of alcohol at a particular event, date, time, and place, often with tailored conditions for that event.",
      needQuestion: "Do you need this licence?",
      needAnswer: "You need a special licence if you are holding an event where alcohol will be sold or supplied and the venue's existing licence does not fully cover that event, or there is no current licence at all.",
    },
    {
      icon: Users,
      title: "Club Licence",
      description: "Specialized support for sports clubs, RSAs, and member-based organizations",
      fullDescription: "A club licence allows a club (such as an RSA, sports club, or working men's club) to sell and supply alcohol for drinking on the club premises. Alcohol can generally only be supplied to members, their guests, and members of clubs with reciprocal visiting rights, under specific conditions.",
      needQuestion: "Do you need this licence?",
      needAnswer: "You need a club licence if you run a member-based club and want to sell or supply alcohol to members and their guests on the club's premises.",
    },
    {
      icon: Wine,
      title: "BYO Licence",
      description: "Streamlined applications for restaurants allowing customers to bring their own alcohol",
      fullDescription: "A BYO on-licence is typically used by restaurants that allow customers to bring their own wine or beer to consume with a meal. The licence controls how BYO alcohol is managed on the premises and may sit alongside the ability to sell and supply alcohol directly to diners.",
      needQuestion: "Do you need this licence?",
      needAnswer: "You need a BYO on-licence if you are a restaurant or café that wants to allow customers to bring their own alcohol to drink with food on your premises.",
    },
    {
      icon: UserCheck,
      title: "Manager's Certificate",
      description: "Complete LCQ training support and certificate application assistance for duty managers",
      fullDescription: "A manager's certificate is a personal licence that authorises an individual to be the duty manager of licensed premises. The duty manager is responsible for day-to-day compliance, staff supervision, checking ID, refusal of service when needed, and overall host responsibility whenever alcohol is being sold or supplied.",
      needQuestion: "Do you need this certificate?",
      needAnswer: "You need a manager's certificate if you are (or will be) responsible for managing a licensed premises or acting as the duty manager on any on-, off-, club, or special licence.",
    },
    {
      icon: Globe,
      title: "Remote Licence",
      description: "Expert help for online alcohol sales and delivery service licensing requirements",
      fullDescription: "A remote off-licence allows businesses to sell alcohol without customers being physically present at the premises, for example via website, app, phone, or mail order. It sets rules around age verification, promotion, and delivery of alcohol sold remotely.",
      needQuestion: "Do you need this licence?",
      needAnswer: "You need a remote licence if you sell alcohol exclusively or primarily by remote means (online, phone, or mail order) rather than over the counter.",
    },
    {
      icon: Award,
      title: "Caterer's Licence",
      description: "Professional assistance for catering businesses providing alcohol service at events",
      fullDescription: "A caterer's on-licence allows a licensed caterer to sell and supply alcohol at other people's functions away from their base premises. It is used for off-site events such as weddings, corporate functions, or private parties where the caterer provides both food and bar service under defined licence conditions.",
      needQuestion: "Do you need this licence?",
      needAnswer: "You need a caterer's licence if your catering business wants to provide and sell alcohol at clients' events held at venues you do not own or permanently operate.",
    },
    {
      icon: FileCheck,
      title: "Objection Management",
      description: "Specialist support to address and resolve objections, helping objectors withdraw concerns before hearings",
      fullDescription: "Objection management is the process of handling public, Police, medical officer of health, or inspector objections to licence or manager's certificate applications, before they reach a hearing stage. It includes assessing risk, preparing written responses, advising on negotiation of conditions with agencies, and helping you strengthen your application to improve the chances of it being granted.",
      needQuestion: "Do you need this service?",
      needAnswer: "You need objection management support if your application has attracted objections, is likely to be opposed, or you want help responding to agencies and reducing the risk of more restrictive licence conditions being imposed.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Liquor License Services NZ | On-License, Off-License, Manager Certificates"
        description="Comprehensive liquor licensing services in New Zealand. Expert assistance with on-license, off-license, special license, manager certificates, and license renewals."
        keywords="liquor license services NZ, on-license application, off-license application, manager certificate NZ, special license, club license"
        canonicalUrl="/services"
      />
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-gold-subtle" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Expert Licensing Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Liquor License Services
                <span className="block bg-gradient-gold bg-clip-text text-transparent mt-2">
                  New Zealand
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive liquor licensing solutions for every business type across NZ
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="group relative border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-slide-up overflow-hidden cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedService(service)}
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-[1px] rounded-lg bg-card" />
                    
                    <CardContent className="relative p-8">
                      {/* Icon with glow effect */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Hover arrow */}
                      <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <CardContent className="relative p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold">Additional Services</h2>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "License renewals and variations for all license types",
                      "Compliance audits and ongoing support",
                      "Objection management with specialist consultant to resolve concerns and help objectors withdraw",
                      "Referrals to specialist licensing solicitors for hearing representation when required",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4 group">
                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today for a free consultation and let us handle your licensing needs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center">
                    <selectedService.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
                </div>
              </DialogHeader>
              <div className="space-y-6">
                <DialogDescription className="text-base leading-relaxed text-foreground">
                  {selectedService.fullDescription}
                </DialogDescription>
                <div className="bg-muted/50 rounded-lg p-5 border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">{selectedService.needQuestion}</h4>
                  <p className="text-muted-foreground">{selectedService.needAnswer}</p>
                </div>
                <div className="flex justify-end">
                  <Link to="/contact">
                    <Button className="bg-gradient-gold hover:opacity-90 text-primary-foreground">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Services;
