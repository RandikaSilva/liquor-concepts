import { CheckCircle, Clock, ArrowRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const Process = () => {
  const navigate = useNavigate();
  
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your business needs, premises type, and licensing requirements. This helps us understand your specific situation and recommend the best license type for your operation.",
    },
    {
      number: "02",
      title: "Application Preparation",
      description: "Our team prepares all necessary documentation, including application forms, site plans, and supporting evidence. We ensure every detail meets regulatory requirements.",
    },
    {
      number: "03",
      title: "Submission & Lodgement",
      description: "We lodge your application with the relevant District Licensing Committee and notify all required agencies including Police, Medical Officer of Health, and Licensing Inspector.",
    },
    {
      number: "04",
      title: "Public Notification",
      description: "Your application is publicly notified as required by law. We monitor for any objections and handle all communication with authorities on your behalf.",
    },
    {
      number: "05",
      title: "Inspection & Reports",
      description: "Relevant agencies inspect your premises and provide reports to the DLC. We coordinate these inspections and address any concerns raised by inspectors.",
    },
    {
      number: "06",
      title: "Objection Resolution (if required)",
      description: "If objections are received, our specialist consultant works directly with objectors to address their concerns and help them withdraw objections. For cases requiring a hearing, we can refer you to experienced licensing solicitors.",
    },
    {
      number: "07",
      title: "License Issued",
      description: "Once approved, your license is issued and you can legally commence alcohol sales. We provide ongoing support to ensure continued compliance.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Liquor License Application Process NZ | Step-by-Step Guide"
        description="Understand the liquor license application process in New Zealand. From initial consultation to license approval, our step-by-step guide covers everything in 8-12 weeks."
        keywords="liquor license process NZ, how to get liquor license New Zealand, liquor license application steps, DLC application process"
        canonicalUrl="/process"
      />
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-gold-subtle" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Your Roadmap to Success</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                The Licensing
                <span className="block bg-gradient-gold bg-clip-text text-transparent mt-2">
                  Process
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A transparent, step-by-step guide to obtaining your liquor license
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {/* Steps Grid */}
              <div className="relative">
                {/* Connecting Line - Desktop */}
                <div className="absolute left-[2.25rem] top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 hidden lg:block rounded-full" />
                
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div
                      key={step.number}
                      className="relative animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden ml-0 lg:ml-20">
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-[1px] rounded-lg bg-card" />
                        
                        {/* Step Number Circle - Positioned on the line */}
                        <div className="absolute -left-20 top-8 hidden lg:flex">
                          <div className="relative">
                            <div className="absolute inset-0 w-16 h-16 bg-primary/30 rounded-full blur-lg" />
                            <div className="relative w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-xl font-bold text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {step.number}
                            </div>
                          </div>
                        </div>
                        
                        <CardContent className="relative p-8">
                          <div className="flex items-start gap-6">
                            {/* Mobile Step Number */}
                            <div className="lg:hidden flex-shrink-0">
                              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-lg font-bold text-primary-foreground">
                                {step.number}
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-grow">
                              <div className="flex items-center gap-3 mb-3">
                                <CheckCircle className="h-6 w-6 text-primary" />
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                                  {step.title}
                                </h3>
                              </div>
                              <p className="text-muted-foreground leading-relaxed text-lg">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Summary */}
              <div className="mt-20">
                <Card className="border-0 bg-gradient-to-br from-primary/10 via-card to-primary/5 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                  
                  <CardContent className="relative p-10 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 w-24 h-24 bg-primary/20 rounded-2xl blur-xl" />
                          <div className="relative w-24 h-24 rounded-2xl bg-gradient-gold flex items-center justify-center">
                            <Clock className="h-12 w-12 text-primary-foreground" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow text-center md:text-left">
                        <h3 className="text-3xl font-bold mb-3">Total Timeline</h3>
                        <p className="text-lg text-muted-foreground mb-6">
                          The typical application process takes{" "}
                          <span className="text-primary font-bold text-xl">8-12 weeks</span>{" "}
                          from initial consultation to license approval. Special licenses can be processed faster, while complex applications with objections may take longer.
                        </p>
                        <Button 
                          onClick={() => navigate("/contact")}
                          size="lg"
                          className="bg-gradient-gold hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Start Your Application
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
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

export default Process;
