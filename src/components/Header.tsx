import { useState } from "react";
import { Menu, X, Facebook, Instagram, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/liquor-concepts-logo.jpg";
import SearchDialog from "./SearchDialog";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Courses", href: "/courses" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
    { name: "Referrals", href: "/referrals" },
    { name: "Insights", href: "/insights" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575829587586", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/liquorconceptsltd/", label: "Instagram" },
    { icon: TikTokIcon, href: "#", label: "TikTok" },
  ];

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => navigate("/")} 
            className="flex items-center animate-fade-in cursor-pointer"
          >
            <img 
              src={logo} 
              alt="Liquor Concepts Logo" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium ${
                  location.pathname === link.href ? "text-primary" : ""
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center gap-3 border-l border-border pl-6">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-foreground/60 hover:text-primary transition-colors flex items-center gap-2"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
                <span className="text-xs text-muted-foreground hidden lg:inline">Ctrl+K</span>
              </button>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-gradient-gold hover:shadow-gold transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-foreground"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`block py-2 text-foreground/80 hover:text-foreground transition-colors w-full text-left ${
                  location.pathname === link.href ? "text-primary" : ""
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="flex gap-4 mt-4 pt-4 border-t border-border">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <Button 
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
              }}
              className="w-full mt-4 bg-gradient-gold hover:shadow-gold transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        )}
      </nav>

      {/* Search Dialog */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
};

export default Header;
