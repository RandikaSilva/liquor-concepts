import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, GraduationCap, BookOpen, CheckCircle, Sparkles, Award, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Courses = () => {
  const providers = [
    {
      name: "ServiceIQ",
      description: "Industry training organization offering the LCQ Manager's Certificate qualification and other hospitality training programs.",
      url: "https://www.serviciq.org.nz",
      courses: ["LCQ Manager's Certificate", "Host Responsibility", "Barista Training"],
    },
    {
      name: "Hospitality New Zealand",
      description: "Provides comprehensive training programs for the hospitality industry including licensing qualifications.",
      url: "https://www.hospitalitynz.org.nz",
      courses: ["LCQ Training", "Industry Updates", "Compliance Training"],
    },
    {
      name: "Online LCQ Providers",
      description: "Various online platforms offer flexible LCQ training courses that can be completed at your own pace.",
      courses: ["Online LCQ Courses", "Self-paced Learning", "Practice Exams"],
    },
  ];

  const requirements = [
    {
      title: "Who Needs an LCQ?",
      description: "Any person responsible for the sale or supply of alcohol on licensed premises must hold a Manager's Certificate (Licence Controller Qualification). At least one certified manager must be on duty whenever alcohol is being sold.",
    },
    {
      title: "What's Involved?",
      description: "The LCQ training covers the Sale and Supply of Alcohol Act, responsible service practices, identifying intoxication, managing difficult situations, and legal obligations. Training is typically completed in one day, followed by an exam.",
    },
    {
      title: "How We Help",
      description: "Once you've completed your training and passed your exam, we can assist with lodging your Manager's Certificate application with the District Licensing Committee, ensuring all documentation is correct and complete.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="LCQ Training & Manager Certificate Courses NZ | Liquor Concepts"
        description="Find accredited LCQ training providers in New Zealand. We connect you with trusted courses for your Manager's Certificate and assist with certificate applications."
        keywords="LCQ training NZ, manager certificate courses, liquor license training New Zealand, LCQ qualification, ServiceIQ LCQ"
        canonicalUrl="/courses"
      />
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-gold-subtle" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Professional Development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Training &
                <span className="block bg-gradient-gold bg-clip-text text-transparent mt-2">
                  Certification
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We connect you with trusted training providers for your licensing qualifications
              </p>
            </div>

            {/* What We Offer */}
            <div className="max-w-4xl mx-auto mb-20">
              <Card className="border-0 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <CardContent className="relative p-10">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-2xl blur-xl" />
                        <div className="relative w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center">
                          <GraduationCap className="h-10 w-10 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold mb-4">Our Referral Service</h2>
                      <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        While we don't provide training courses directly, we work closely with accredited 
                        training providers and can recommend the best options for your needs. We'll guide you 
                        through the certification process and help with your application once you've completed 
                        your training.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Recommend trusted training providers",
                          "Guide you through certification requirements",
                          "Assist with certificate applications",
                          "Support throughout the entire process",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 group">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <CheckCircle className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Training Providers */}
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended Training Providers</h2>
                <p className="text-muted-foreground">Trusted partners for your LCQ qualification</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {providers.map((provider, index) => (
                  <Card
                    key={provider.name}
                    className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-slide-up overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-[1px] rounded-lg bg-card" />
                    
                    <CardContent className="relative p-8">
                      {/* Icon with glow effect */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <BookOpen className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {provider.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {provider.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <p className="font-semibold text-sm text-primary">Courses Offered:</p>
                        <ul className="space-y-2">
                          {provider.courses.map((course) => (
                            <li key={course} className="flex items-center gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {provider.url && (
                        <a
                          href={provider.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block w-full"
                        >
                          <Button 
                            variant="outline"
                            className="w-full border-primary/30 hover:border-primary hover:bg-primary/5 group-hover:border-primary transition-colors"
                          >
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LCQ Requirements */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Essential Information</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Manager's Certificate Requirements</h2>
                <p className="text-muted-foreground">Everything you need to know about the LCQ</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {requirements.map((req, index) => (
                  <Card
                    key={req.title}
                    className="group border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl font-bold text-primary-foreground">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{req.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {req.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Certified?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today and we'll guide you through the training and certification process.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
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

export default Courses;
