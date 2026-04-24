import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, BookOpen, Mail, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Sample data - in production, this would come from the database
const sampleInsights = [
  {
    id: 10,
    slug: "auckland-liquor-licensing-guide",
    type: "blog",
    title: "Auckland Liquor Licensing: Everything You Need to Know Before You Apply",
    excerpt: "Need a liquor licence in Auckland? A complete guide covering licence types, the step-by-step application process, costs, timelines, and ongoing compliance obligations.",
    author: "Liquor Concepts Team",
    date: "2025-04-15",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    slug: "why-liquor-licenses-get-rejected-auckland",
    type: "blog",
    title: "Common Reasons Liquor Licenses Get Rejected by Auckland Council",
    excerpt: "Avoid costly delays! Learn why Auckland Council rejects liquor license applications — from incomplete documentation to community opposition — and how to get approval first time.",
    author: "Liquor Concepts Team",
    date: "2025-04-15",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    slug: "types-of-alcohol-licences-auckland",
    type: "blog",
    title: "Types of Alcohol Licences in Auckland: Which One Do You Need?",
    excerpt: "Confused about alcohol licence types in Auckland? Learn the difference between on-licences, off-licences, club licences, and special licences — and which one suits your business.",
    author: "Liquor Concepts Team",
    date: "2025-04-15",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    slug: "new-year-compliance-checklist-licensed-premises",
    type: "blog",
    title: "New Year Compliance Checklist for Licensed Premises",
    excerpt: "Start the year strong: key liquor licensing tasks every venue should review. A practical checklist every hospitality business should complete.",
    author: "Liquor Concepts Team",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    slug: "special-licences-what-you-need-to-know-event-season",
    type: "blog",
    title: "Special Licences: What You Need to Know This Event Season",
    excerpt: "Avoid delays and mistakes when planning events that involve alcohol. Here's everything you need to know about special licence applications.",
    author: "Liquor Concepts Team",
    date: "2025-02-01",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 1,
    slug: "understanding-new-zealand-liquor-licensing-framework",
    type: "blog",
    title: "Understanding the New Zealand Liquor Licensing Framework",
    excerpt: "A comprehensive guide to understanding how liquor licensing works in New Zealand, including the different types of licenses and when you need them.",
    author: "Liquor Concepts Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    slug: "january-2024-newsletter-industry-updates",
    type: "newsletter",
    title: "January 2024 Newsletter: Industry Updates",
    excerpt: "Stay up to date with the latest changes in liquor licensing regulations, upcoming deadlines, and tips for maintaining compliance.",
    author: "Liquor Concepts Team",
    date: "2024-01-01",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    slug: "how-to-prepare-for-your-license-renewal",
    type: "blog",
    title: "How to Prepare for Your License Renewal",
    excerpt: "License renewals don't have to be stressful. Here's our step-by-step guide to preparing for your renewal application.",
    author: "Liquor Concepts Team",
    date: "2023-12-20",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    slug: "managers-certificate-what-you-need-to-know",
    type: "blog",
    title: "Manager's Certificate: What You Need to Know",
    excerpt: "Everything you need to know about obtaining and maintaining your Manager's Certificate in New Zealand.",
    author: "Liquor Concepts Team",
    date: "2023-12-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    slug: "december-2023-newsletter-year-in-review",
    type: "newsletter",
    title: "December 2023 Newsletter: Year in Review",
    excerpt: "Looking back at the key changes and developments in liquor licensing throughout 2023.",
    author: "Liquor Concepts Team",
    date: "2023-12-01",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=60",
  },
];

const Insights = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const filteredInsights = activeTab === "all" 
    ? sampleInsights 
    : sampleInsights.filter(insight => insight.type === activeTab);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-NZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Liquor Licensing Insights & News NZ | Blogs & Newsletters"
        description="Expert insights, industry news, and practical guides for liquor licensing in New Zealand. Stay informed about regulations, compliance, and licensing updates."
        keywords="liquor licensing news NZ, liquor license blog, licensing industry updates, NZ liquor regulations, licensing compliance tips"
        canonicalUrl="/insights"
      />
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-gold-subtle" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Stay Informed</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Insights &
                <span className="block bg-gradient-gold bg-clip-text text-transparent mt-2">
                  Updates
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert insights, industry news, and practical guides to help you navigate 
                New Zealand's liquor licensing landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-12">
                <TabsList className="grid grid-cols-3 w-full max-w-md bg-muted/50 p-1">
                  <TabsTrigger value="all" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-primary-foreground">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="blog" className="flex items-center gap-2 data-[state=active]:bg-gradient-gold data-[state=active]:text-primary-foreground">
                    <BookOpen className="h-4 w-4" />
                    Blogs
                  </TabsTrigger>
                  <TabsTrigger value="newsletter" className="flex items-center gap-2 data-[state=active]:bg-gradient-gold data-[state=active]:text-primary-foreground">
                    <Mail className="h-4 w-4" />
                    Newsletters
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredInsights.map((insight, index) => (
                    <Card 
                      key={insight.id} 
                      className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => navigate(`/insights/${insight.slug}`)}
                    >
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="absolute inset-[1px] rounded-lg bg-card pointer-events-none" />
                      
                      <div className="relative h-52 overflow-hidden">
                        <img 
                          src={insight.image} 
                          alt={insight.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                        <Badge 
                          className={`absolute top-4 left-4 ${
                            insight.type === 'blog' 
                              ? 'bg-gradient-gold text-primary-foreground border-0' 
                              : 'bg-secondary/90 text-secondary-foreground border-0'
                          }`}
                        >
                          {insight.type === 'blog' ? 'Blog' : 'Newsletter'}
                        </Badge>
                      </div>
                      
                      <CardHeader className="relative pb-2 pt-6">
                        <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors duration-300">
                          {insight.title}
                        </h3>
                      </CardHeader>
                      
                      <CardContent className="relative pb-4">
                        <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                          {insight.excerpt}
                        </p>
                      </CardContent>
                      
                      <CardFooter className="relative flex items-center justify-between text-sm text-muted-foreground border-t border-border/30 pt-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{formatDate(insight.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{insight.readTime}</span>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {filteredInsights.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No insights found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <Card className="max-w-3xl mx-auto border-0 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <CardContent className="relative p-10 md:p-12">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-xl blur-xl mx-auto" />
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto">
                      <Mail className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                    Get the latest insights, industry updates, and expert tips delivered 
                    directly to your inbox.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="px-5 py-4 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary flex-1 text-base"
                    />
                    <Button 
                      size="lg"
                      className="bg-gradient-gold hover:opacity-90 text-primary-foreground px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Subscribe
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Insights;
