import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileCheck, Users, Award, ArrowRight, Clock, Shield, CheckCircle, Wine, Beer, Store, GlassWater, Star, Quote } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Liquor Concepts",
    description: "Expert liquor licensing consultants in New Zealand. We handle liquor license applications, manager certificates, and license renewals for bars, restaurants, and bottle stores.",
    url: "https://liquorconcepts.co.nz",
    telephone: "+64 21 515 047",
    email: "hello@liquorconcepts.co.nz",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ponsonby",
      addressRegion: "Auckland",
      postalCode: "1144",
      addressCountry: "NZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -36.8485,
      longitude: 174.7633,
    },
    openingHours: "Mo-Fr 08:00-17:00",
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61575829587586",
      "https://www.instagram.com/liquorconceptsltd",
    ],
    serviceArea: {
      "@type": "Country",
      name: "New Zealand",
    },
  };

  const highlights = [
    {
      icon: FileCheck,
      title: "All License Types",
      description: "From on-license to remote sales, we handle liquor license applications across NZ.",
    },
    {
      icon: Users,
      title: "Manager Certificates",
      description: "Full support for applications and renewals.",
    },
    {
      icon: Award,
      title: "24+ Years Experience",
      description: "Trusted consultants since 2000.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Expert Liquor License & Alcohol License NZ | Liquor Concepts"
        description="Get an expert liquor license for bars, restaurants, bottle stores, and vineyards. Trusted liquor license agents across New Zealand."
        keywords="liquor license agents, alcohol license nz, alcohol license, alcohol license auckland, liquor license"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      
      {/* Quick Services Overview */}
      <section className="py-16 bg-pattern-dots relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="text-center animate-slide-up bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4 shadow-gold">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Liquor License Types We
              <span className="bg-gradient-gold bg-clip-text text-transparent"> Handle</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From bars and restaurants to bottle stores and vineyards, we specialize in all types across New Zealand.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Wine, label: "On-License", desc: "Bars & Restaurants" },
              { icon: Store, label: "Off-License", desc: "Bottle Stores" },
              { icon: GlassWater, label: "Club License", desc: "Sports & Social Clubs" },
              { icon: Beer, label: "Special License", desc: "Events & Functions" },
              { icon: Wine, label: "BYO License", desc: "BYO Restaurants" },
              { icon: Store, label: "Remote License", desc: "Online Sales" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-background rounded-xl p-5 border border-border hover:border-primary/50 hover:shadow-gold transition-all duration-300 text-center group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => navigate("/services")}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gradient-gold group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button
              onClick={() => navigate("/services")}
              variant="outline"
              className="border-primary/30 hover:border-primary"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Simple Liquor License
              <span className="bg-gradient-gold bg-clip-text text-transparent"> Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make licensing straightforward. Here's how we help get your application approved.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Free initial discussion to understand your needs and assess your application" },
              { step: "02", title: "Preparation", desc: "We prepare all documentation and ensure compliance requirements are met" },
              { step: "03", title: "Submission", desc: "Lodge your application with the DLC and manage all correspondence" },
              { step: "04", title: "Approval", desc: "Receive your license and ongoing support for renewals and compliance" },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-primary/10 absolute top-4 right-4">{item.step}</div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center mb-4 shadow-soft">
                    <span className="text-primary-foreground font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button
              onClick={() => navigate("/process")}
              variant="outline"
              className="border-primary/30 hover:border-primary"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our
              <span className="bg-gradient-gold bg-clip-text text-transparent"> Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by hundreds of businesses across New Zealand since 2000.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", business: "Bar Owner, Auckland", text: "Liquor Concepts made the entire licensing process stress-free. Their expertise saved us weeks of paperwork." },
              { name: "James T.", business: "Restaurant Owner, Wellington", text: "Professional, efficient, and always available to answer questions. Highly recommend their services." },
              { name: "Michelle K.", business: "Bottle Store, Christchurch", text: "From application to approval, they handled everything. Best investment we made for our business." },
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.business}</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose
                <span className="bg-gradient-gold bg-clip-text text-transparent"> Liquor Concepts?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                With 24+ years in New Zealand's liquor licensing, we've helped hundreds of businesses through the process.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Expert Knowledge", desc: "Deep understanding of the Sale and Supply of Alcohol Act 2012" },
                  { icon: Clock, title: "Save Time", desc: "We handle all paperwork and council communications for you" },
                  { icon: CheckCircle, title: "98% Success Rate", desc: "Our applications are prepared to the highest standard" },
                  { icon: Users, title: "Personal Service", desc: "Direct access to your dedicated licensing consultant" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Ready for Your Liquor License?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us for a free consultation. We'll assess your needs and guide you forward.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Fixed fee pricing available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>NZ-wide service</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate("/contact")}
                size="lg"
                className="w-full mt-6 bg-gradient-gold hover:shadow-gold transition-all duration-300 group"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute inset-0 bg-pattern-grid opacity-50" />
        
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-gold opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center bg-background/90 backdrop-blur-sm rounded-2xl p-12 border-2 border-primary/20 shadow-elegant">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Your
              <span className="block bg-gradient-gold bg-clip-text text-transparent">
                Liquor License?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our experts guide you. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/contact")}
                size="lg"
                className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-lg px-8 group"
              >
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => navigate("/services")}
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 text-lg px-8"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
