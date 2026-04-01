import { Circle as Instagram, Activity as Linkedin, MessageCircle as Twitter } from "lucide-react";


export default function Navbar() {
  const navLinks = ["Home", "How It Works", "Philosophy", "Use Cases"];

  return (
    <nav className="fixed top-0 z-50 w-full px-8 py-4 md:px-28 bg-transparent">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Left: Logo & Nav Links */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-foreground/60">
              <div className="w-3 h-3 rounded-full border border-foreground/60" />
            </div>
        
            <span className="font-bold text-xl tracking-tight">Mindloop</span>
          
          </div>

          {/* Center-left: Nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <div key={link} className="flex items-center gap-6">
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="text-muted-foreground/40 text-xs">•</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: Instagram, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Linkedin, href: "#" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="liquid-glass flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:scale-105 transition-transform"
              aria-label="Social Link"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
