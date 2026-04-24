import { Facebook, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/liquor-concepts-logo.jpg";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Liquor Concepts Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your trusted partner for liquor licensing in NZ. Helping businesses navigate requirements since 2000.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575829587586"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/liquorconceptsltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-colors"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/process")} className="text-muted-foreground hover:text-primary transition-colors">
                  Process
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/courses")} className="text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/faq")} className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/referrals")} className="text-muted-foreground hover:text-primary transition-colors">
                  Referrals
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/insights")} className="text-muted-foreground hover:text-primary transition-colors">
                  Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate("/about")} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/faq")} className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <a href="mailto:hello@liquorconcepts.co.nz" className="text-muted-foreground hover:text-primary transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <button onClick={() => navigate("/terms")} className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Liquor Concepts. All rights reserved. Licensed consultants.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
