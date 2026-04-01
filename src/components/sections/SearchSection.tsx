import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const platforms = [
  {
    name: "ChatGPT",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    description: "AI-driven conversations that reshape how we find information and synthesize knowledge in real time.",
    invert: true
  },
  {
    name: "Perplexity",
    icon: "https://cdn.simpleicons.org/perplexity/ffffff",
    description: "Answers are delivered directly with verifiable sources, bypassing the traditional link-clicking experience.",
    invert: false
  },
  {
    name: "Google AI",
    icon: "https://cdn.simpleicons.org/google/ffffff",
    description: "Search generative experiences summarize extensive web content into a singular, unified overview instantly.",
    invert: false
  }
];

export default function SearchSection() {
  return (
    <section id="how-it-works" className="w-full px-8 md:px-28 pt-52 md:pt-64 pb-6 md:pb-9 bg-background relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight md:tracking-[-2px] text-center mb-6"
          {...fadeUp(0.1)}
        >
          Search has <span className="font-serif italic font-normal px-2">changed.</span> Have you?
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p 
          className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-24 leading-relaxed font-light"
          {...fadeUp(0.2)}
        >
          People aren't scrolling through ten pages of search results anymore. The new internet expects direct answers, deep conversation, and immediate value.
        </motion.p>
        
        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20 w-full px-4 md:px-0">
          {platforms.map((platform, idx) => (
            <motion.div 
              key={platform.name}
              className="flex flex-col items-center text-center group"
              {...fadeUp(0.3 + (idx * 0.1))}
            >
              <div className="w-[180px] h-[180px] rounded-2xl overflow-hidden mb-8 bg-secondary/40 border border-border/50 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src={platform.icon} 
                  alt={`${platform.name} icon`}
                  className="w-20 h-20 object-contain opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" 
                  style={platform.invert ? { filter: "brightness(0) invert(1)" } : undefined}
                />
              </div>
              <h3 className="font-semibold text-base mb-3 text-foreground/90">{platform.name}</h3>
              <p className="text-muted-foreground text-sm font-light max-w-xs">{platform.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Tagline */}
        <motion.div 
          className="text-muted-foreground text-sm text-center italic font-serif flex items-center justify-center gap-4 w-full"
          {...fadeUp(0.6)}
        >
          <div className="h-px w-12 bg-border/40" />
            If you don't answer the questions, someone else will.
          <div className="h-px w-12 bg-border/40" />
        </motion.div>

      </div>
    </section>
  );
}
