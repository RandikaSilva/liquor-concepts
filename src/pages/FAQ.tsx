import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How long does it take to get a liquor license?",
      answer: "The typical timeframe is 8-12 weeks from application submission to license approval. Special licenses can be processed faster (2-4 weeks), while applications with objections may take longer. We work efficiently to minimize delays throughout the process.",
    },
    {
      question: "What is the difference between an on-license and off-license?",
      answer: "An on-license allows you to sell alcohol for consumption on your premises (e.g., bars, restaurants, cafes). An off-license permits the sale of alcohol for consumption elsewhere (e.g., bottle stores, supermarkets). Some premises may hold both types of licenses.",
    },
    {
      question: "Do I need a manager's certificate?",
      answer: "Yes, if you're responsible for the sale or supply of alcohol on licensed premises, you need a Manager's Certificate (LCQ - Licence Controller Qualification). At least one certified manager must be on duty whenever alcohol is being sold.",
    },
    {
      question: "How much does a liquor license cost?",
      answer: "Costs vary depending on the license type, premise size, and location. Application fees are set by your District Licensing Committee, typically ranging from $500-$1,500. Our consultancy fees are additional and depend on the complexity of your application. Contact us for a detailed quote.",
    },
    {
      question: "Can my application be declined?",
      answer: "While it's possible, our 98% success rate reflects our thorough preparation and expertise. Applications are typically declined due to objections from agencies, public concerns, or incomplete documentation. We minimize this risk through careful preparation and proactive communication.",
    },
    {
      question: "What is a special license?",
      answer: "A special license is a temporary license for one-off events where alcohol will be sold or supplied (e.g., weddings, festivals, fundraisers). It's usually valid for a specific date and time period, and applications must be lodged at least 20 working days before the event.",
    },
    {
      question: "Do I need public notification for my application?",
      answer: "Most new license applications require public notification, which means displaying a notice on your premises and publishing in local media. This allows the public and relevant agencies to submit objections. Some applications (like renewals) may not require public notification.",
    },
    {
      question: "What agencies inspect my premises?",
      answer: "Three key agencies inspect licensed premises: the Police (focus on public safety and crime prevention), the Medical Officer of Health (public health concerns), and the Licensing Inspector (compliance with the Sale and Supply of Alcohol Act). We coordinate with all agencies on your behalf.",
    },
    {
      question: "How long is a liquor license valid for?",
      answer: "On-licenses and off-licenses are typically issued for 1-3 years initially, with renewals available for up to 3 years. Special licenses are issued for specific events. Club licenses can be issued for up to 3 years. You must renew before expiry to continue operating.",
    },
    {
      question: "Can I sell alcohol online with a remote license?",
      answer: "Yes, a remote sales license (off-license with remote endorsement) allows you to sell alcohol online or via phone/mail order. You must have a physical premises for dispatch, comply with age verification requirements, and ensure responsible delivery practices.",
    },
    {
      question: "What is a BYO license?",
      answer: "A BYO (Bring Your Own) license allows customers to bring and consume their own alcohol at your restaurant or cafe. It's more affordable than a full on-license and has fewer restrictions, but you can't sell alcohol under this license type.",
    },
    {
      question: "What happens if there's an objection to my application?",
      answer: "If an agency or member of the public objects, our specialist objection consultant will work directly with the objector to understand and address their concerns. We have extensive experience in negotiating withdrawals of objections. If a hearing becomes necessary, we can refer you to experienced licensing solicitors who specialize in DLC representation.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Liquor Licensing FAQ NZ | Questions About Licenses & Manager Certificates"
        description="Frequently asked questions about liquor licensing in New Zealand. Learn about on-license vs off-license, manager certificates, application timelines, costs, and more."
        keywords="liquor license FAQ NZ, liquor licensing questions, manager certificate FAQ, on-license vs off-license, liquor license cost NZ"
        canonicalUrl="/faq"
      />
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-gold-subtle" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Got Questions?</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked
                <span className="block bg-gradient-gold bg-clip-text text-transparent mt-2">
                  Questions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about liquor licensing in New Zealand
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="group border-0 bg-card/50 backdrop-blur-sm data-[state=open]:bg-card rounded-xl px-0 overflow-hidden transition-all duration-300 animate-slide-up hover:shadow-lg hover:shadow-primary/5"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute inset-[1px] rounded-xl bg-card pointer-events-none" />
                    
                    <AccordionTrigger className="relative text-left hover:no-underline py-6 px-6 [&[data-state=open]>div>svg]:rotate-0">
                      <div className="flex items-start gap-4 pr-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <HelpCircle className="h-5 w-5 text-primary transition-transform duration-300" />
                        </div>
                        <span className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="relative text-muted-foreground pb-6 px-6 leading-relaxed">
                      <div className="pl-14 text-base">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <CardContent className="relative p-10 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-2xl blur-xl" />
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center">
                        <MessageCircle className="h-10 w-10 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold mb-3">Still Have Questions?</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Can't find the answer you're looking for? Our team is here to help with any 
                      questions about liquor licensing, applications, or compliance.
                    </p>
                    <Button 
                      onClick={() => navigate("/contact")}
                      size="lg"
                      className="bg-gradient-gold hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Contact Us
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

export default FAQ;
