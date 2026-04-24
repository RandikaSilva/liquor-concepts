import { FileCheck, CheckCircle, Users, Award, Sparkles, ArrowRight, Heart, Target, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: FileCheck,
      title: "Streamlined Process",
      description: "We handle all paperwork and applications from start to finish",
    },
    {
      icon: CheckCircle,
      title: "98% Success Rate",
      description: "Proven track record of successful license approvals",
    },
    {
      icon: Users,
      title: "Personalized Support",
      description: "Dedicated consultant assigned to guide you every step",
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Over 24 years of combined experience in liquor licensing law",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in every application we handle",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Your success is our success - we're with you every step of the way",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="About Liquor Concepts | Liquor License Consultants NZ Since 2000"
        description="Liquor Concepts has been simplifying liquor licensing in New Zealand since 2000. Expert consultants with 98% success rate for license applications, renewals, and manager certificates."
        keywords="liquor license consultants NZ, liquor licensing experts New Zealand, liquor license application help, about Liquor Concepts"
        canonicalUrl="/about"
      />
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-gold-subtle" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Established 2000</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                  Simplifying Liquor
                  <span className="block bg-gradient-gold bg-clip-text text-transparent mt-2">
                    Licensing Since 2000
                  </span>
                </h1>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Liquor Concepts, we specialize in making the complex process of obtaining liquor 
                    licenses straightforward and stress-free. Whether you're opening a new bar, restaurant, 
                    bottle store, or vineyard, we guide you through every step.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our team of experienced consultants understands the intricacies of New Zealand's 
                    liquor licensing regulations. From initial applications to manager certificates and 
                    renewals, we ensure your business stays compliant and operational.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With over two decades of experience, we've helped hundreds of businesses successfully 
                    navigate the licensing process. Our personalized approach means you get dedicated support 
                    tailored to your specific needs and circumstances.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={feature.title}
                      className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-slide-up overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-[1px] rounded-lg bg-card" />
                      
                      <CardContent className="relative p-6">
                        <div className="relative mb-4">
                          <div className="absolute inset-0 w-14 h-14 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition-all duration-500" />
                          <div className="relative w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-7 w-7 text-primary-foreground" />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">What We Stand For</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="group border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="relative mx-auto mb-6 w-20 h-20">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                        <div className="relative w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-10 w-10 text-primary-foreground" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let our experienced team handle your liquor licensing needs with expertise and care.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
