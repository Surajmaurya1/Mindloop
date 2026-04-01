import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 0.8", "1 0.4"],
  });

  const p1 = "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
  const p1Words = p1.split(" ");
  
  const p2 = "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";
  const p2Words = p2.split(" ");

  const totalWords = p1Words.length + p2Words.length;

  return (
    <section id="philosophy" className="w-full px-8 md:px-28 pt-0 pb-32 md:pb-44 bg-background relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Centered Video */}
        <motion.div 
          className="w-full max-w-[800px] aspect-square rounded-3xl overflow-hidden mb-32 relative liquid-glass p-1"
          {...fadeUp(0.1)}
        >
          <video
            className="w-full h-full object-cover rounded-3xl"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        {/* Scroll Reveal Text container */}
        <div ref={containerRef} className="max-w-4xl text-center space-y-10">
          
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight md:tracking-[-1px] leading-tight md:leading-tight">
            {p1Words.map((word, i) => {
              const start = i / totalWords;
              const end = start + (1 / totalWords);
              return (
                <Word 
                  key={i} 
                  word={word} 
                  progress={scrollYProgress} 
                  range={[start, end]}
                  isHighlighted={["curiosity", "meets", "clarity"].includes(word.replace(/[^a-zA-Z]/g, ''))}
                />
              );
            })}
          </p>

          <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-snug">
            {p2Words.map((word, i) => {
              const start = (p1Words.length + i) / totalWords;
              const end = start + (1 / totalWords);
              return (
                <Word 
                  key={i} 
                  word={word} 
                  progress={scrollYProgress} 
                  range={[start, end]}
                  isHighlighted={false}
                />
              );
            })}
          </p>
        </div>

      </div>
    </section>
  );
}

function Word({ word, progress, range, isHighlighted }: { word: string, progress: any, range: [number, number], isHighlighted: boolean }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  
  return (
    <span className="relative inline-block mr-[0.25em]">
      <motion.span 
        style={{ opacity }}
        className={isHighlighted ? "text-foreground" : "text-[hsl(var(--hero-subtitle))]"}
      >
        {word}
      </motion.span>
    </span>
  );
}
