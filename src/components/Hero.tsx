import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-liquor.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with enhanced overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-pattern-grid opacity-30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-gold opacity-20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm shadow-soft">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">
                Expert Liquor License Consultants
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Liquor Licensing Consultants
              <span className="block bg-gradient-gold bg-clip-text text-transparent">
                New Zealand
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              We provide expert services for liquor license applications—bars, restaurants, bottle stores, vineyards nationwide. Our team manages manager certificates and renewals from start to finish.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => navigate("/contact")}
                size="lg" 
                className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-lg px-8 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => navigate("/services")}
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 text-lg px-8"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
              <div className="group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-sm text-muted-foreground">Liquor Licenses Approved</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">24+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in lg:animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border-4 border-primary/10">
              <img
                src={heroImage}
                alt="Professional liquor licensing consultancy services in New Zealand"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-shine opacity-0 hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background border-2 border-primary rounded-2xl p-6 shadow-gold animate-float backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-soft">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-lg">Trusted Liquor</div>
                  <div className="text-sm text-muted-foreground">License Agents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
