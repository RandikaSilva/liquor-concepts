import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search, FileText, Phone, Info, BookOpen, HelpCircle, Users, Gift } from "lucide-react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const pages = [
    {
      title: "Home",
      url: "/",
      description: "Liquor licensing consultants in New Zealand",
      icon: FileText,
      keywords: ["home", "main", "index", "start"],
    },
    {
      title: "Services",
      url: "/services",
      description: "All liquor licensing services we offer",
      icon: FileText,
      keywords: ["services", "license", "on-license", "off-license", "special", "club", "byo", "remote"],
    },
    {
      title: "Process",
      url: "/process",
      description: "Our 4-step licensing process",
      icon: BookOpen,
      keywords: ["process", "how it works", "steps", "procedure", "workflow"],
    },
    {
      title: "Courses",
      url: "/courses",
      description: "LCQ training courses and manager certificates",
      icon: BookOpen,
      keywords: ["courses", "training", "lcq", "manager certificate", "education", "learn"],
    },
    {
      title: "FAQ",
      url: "/faq",
      description: "Frequently asked questions",
      icon: HelpCircle,
      keywords: ["faq", "questions", "help", "support", "answers"],
    },
    {
      title: "About",
      url: "/about",
      description: "About Liquor Concepts",
      icon: Info,
      keywords: ["about", "us", "company", "team", "who we are"],
    },
    {
      title: "Contact",
      url: "/contact",
      description: "Get in touch with us",
      icon: Phone,
      keywords: ["contact", "email", "phone", "call", "reach", "message"],
    },
    {
      title: "Referrals",
      url: "/referrals",
      description: "Referral program",
      icon: Gift,
      keywords: ["referrals", "refer", "reward", "partner"],
    },
    {
      title: "Insights",
      url: "/insights",
      description: "Articles and industry insights",
      icon: FileText,
      keywords: ["insights", "blog", "articles", "news", "updates"],
    },
  ];

  const filteredPages = pages.filter((page) => {
    const query = searchQuery.toLowerCase();
    return (
      page.title.toLowerCase().includes(query) ||
      page.description.toLowerCase().includes(query) ||
      page.keywords.some((keyword) => keyword.includes(query))
    );
  });

  const handleSelect = (url: string) => {
    navigate(url);
    onOpenChange(false);
    setSearchQuery("");
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search pages, services, or content..."
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {filteredPages.map((page) => {
            const Icon = page.icon;
            return (
              <CommandItem
                key={page.url}
                onSelect={() => handleSelect(page.url)}
                className="cursor-pointer"
              >
                <Icon className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span className="font-medium">{page.title}</span>
                  <span className="text-xs text-muted-foreground">{page.description}</span>
                </div>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
