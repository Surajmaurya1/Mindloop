import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const features = [
  {
    title: "Curated Feed",
    description: "A chronological, noise-free feed of the newsletters and content you actually care about."
  },
  {
    title: "Writer Tools",
    description: "Powerful publishing tools designed to help you write deeply and structure your ideas."
  },
  {
    title: "Community",
    description: "Foster meaningful conversations around your writing with native discussion features."
  },
  {
    title: "Distribution",
    description: "Reach the right readers exactly when they are looking for the depth you provide."
  }
];

export default function SolutionSection() {
  return (
    <section className="w-full px-8 md:px-28 py-32 md:py-44 border-t border-border/30 bg-background relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <motion.p 
            className="text-xs tracking-[3px] uppercase text-muted-foreground mb-6"
            {...fadeUp(0.1)}
          >
            SOLUTION
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight md:tracking-[-1.5px]"
            {...fadeUp(0.2)}
          >
            The platform for <span className="font-serif italic font-normal px-2">meaningful</span> content
          </motion.h2>
        </div>

        {/* Video Banner */}
        <motion.div 
          className="w-full aspect-video md:aspect-[3/1] rounded-2xl overflow-hidden mb-20 md:mb-32 relative bg-secondary"
          {...fadeUp(0.3)}
        >
          <div className="absolute inset-0 bg-foreground/5 z-10 mix-blend-overlay pointer-events-none" />
          <video
            className="w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        {/* Features 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.title} 
              className="flex flex-col"
              {...fadeUp(0.4 + (idx * 0.1))}
            >
              <div className="h-px w-full bg-border/40 mb-6" />
              <h3 className="font-semibold text-base mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
