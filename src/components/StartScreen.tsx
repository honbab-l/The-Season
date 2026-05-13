import { motion } from 'motion/react';

export default function StartScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <div 
      className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-primary-base/80 backdrop-blur-sm"
      onClick={onEnter}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="flex flex-col items-center text-center focus:outline-none"
      >
        <div className="w-16 h-16 mb-6 rotate-45 border border-accent-gold/60 flex items-center justify-center">
            <div className="w-12 h-12 border border-accent-gold-dark/40 flex items-center justify-center">
               <span className="font-display text-2xl text-accent-gold-dark -rotate-45 block">B</span>
            </div>
        </div>
        
        <h1 className="mb-4 text-5xl tracking-widest uppercase md:text-7xl font-display text-text-main drop-shadow-sm">
          THE<br/>SEASON
        </h1>
        
        <div className="flex items-center gap-4 mb-12 opacity-70">
          <div className="w-12 h-px bg-accent-gold"></div>
          <span className="font-serif italic tracking-widest text-accent-gold-dark">Black Over</span>
          <div className="w-12 h-px bg-accent-gold"></div>
        </div>

        <motion.p 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="font-serif tracking-widest uppercase text-text-light/80"
        >
          환영합니다
        </motion.p>
      </motion.div>
    </div>
  );
}
