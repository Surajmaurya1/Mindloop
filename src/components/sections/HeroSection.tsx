import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent z-[1] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-28 md:pt-32 max-w-4xl mx-auto w-full">
        
        {/* Avatars */}
        <motion.div 
          className="flex items-center gap-3 mb-6"
          {...fadeUp(0.1)}
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden"
              >
                <img 
                  src={`https://i.pravatar.cc/150?img=${i + 10}`} 
                  alt={`Avatar ${i}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-muted-foreground text-sm font-medium">7,000+ people already subscribed</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight md:tracking-[-2px] leading-tight md:leading-none mb-6"
          {...fadeUp(0.2)}
        >
          Get <span className="font-serif italic font-normal px-2">Inspired</span> with Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-[hsl(var(--hero-subtitle))] max-w-2xl text-center mb-10 leading-relaxed font-light"
          {...fadeUp(0.3)}
        >
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        {/* Subscription Form */}
        <motion.form 
          className="liquid-glass rounded-full p-2 w-full max-w-lg flex items-center gap-2 relative mt-4"
          {...fadeUp(0.4)}
          onSubmit={(e) => { e.preventDefault(); alert('Subscribed!') }}
        >
          <input 
            type="email" 
            placeholder="john@example.com" 
            required
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder-muted-foreground px-6 py-2 ml-2"
          />
          <motion.button 
            type="submit"
            className="bg-foreground text-background font-medium rounded-full px-8 py-3 outline-none whitespace-nowrap hidden sm:block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            SUBSCRIBE
          </motion.button>
          {/* Mobile responsive button */}
          <motion.button 
            type="submit"
            className="bg-foreground text-background font-medium rounded-full px-6 py-3 py-2.5 outline-none whitespace-nowrap block sm:hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            JOIN
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
