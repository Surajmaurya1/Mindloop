import { motion } from "framer-motion";

import React from "react";
import Hls from "hls.js";
import { fadeUp } from "@/lib/animations";

export default function CTASection() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const src = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true, // Optimize quality for player size
        startLevel: -1,             // Adaptive bitrate
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.error("Auto-play prevented", e));
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Fallback for native Safari support
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((e) => console.error("Auto-play prevented", e));
      });
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20 md:pt-52 md:pb-24 border-t border-border/30 flex items-center justify-center">
      
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto w-full">
        
        {/* Concentric Circles Logo */}
        <motion.div 
          className="mb-8"
          {...fadeUp(0.1)}
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground/60 shadow-lg">
            <div className="w-5 h-5 rounded-full border border-foreground/60" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          className="text-4xl md:text-6xl font-medium tracking-tight md:tracking-[-1.5px] mb-6"
          {...fadeUp(0.2)}
        >
          <span className="font-serif italic font-normal px-2">Start</span> Your Journey
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground font-light mb-12"
          {...fadeUp(0.3)}
        >
          Experience depth, discover meaning, and build meaningful relationships below the surface of the internet noise.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          {...fadeUp(0.4)}
        >
          <motion.button 
            className="w-full sm:w-auto bg-foreground text-background font-medium rounded-lg px-8 py-3.5 whitespace-nowrap"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => alert("Subscribe Now clicked")}
          >
            Subscribe Now
          </motion.button>
          
          <motion.button 
            className="w-full sm:w-auto liquid-glass rounded-lg px-8 py-3.5 whitespace-nowrap text-foreground font-medium"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => alert("Start Writing clicked")}
          >
            Start Writing
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
