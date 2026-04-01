export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-6 px-8 md:px-28 bg-background border-t border-border/30 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-muted-foreground text-sm font-light">
          &copy; 2026 Mindloop. All rights reserved.
        </p>
        
        {/* Right */}
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
