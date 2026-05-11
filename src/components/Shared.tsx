import { motion } from 'motion/react';
import { ViewState } from '../App';

export function BackButton({ navigate }: { navigate: (v: ViewState) => void }) {
  return (
    <motion.button
      whileHover={{ x: -4 }}
      onClick={() => navigate('main')}
      className="fixed z-50 flex items-center gap-2 px-4 py-2 text-sm tracking-widest uppercase transition-colors border rounded-full top-6 left-6 font-serif border-accent-gold-dark/30 text-accent-gold-dark hover:bg-accent-gold/10 bg-white/50 backdrop-blur-sm"
    >
      <span>&larr; 돌아가기</span>
    </motion.button>
  );
}

export function SectionHeader({ logoSrc, alt }: { logoSrc: string, alt?: string }) {
  return (
    <div className="flex flex-col items-center mt-12 mb-16 text-center">
      <img src={logoSrc} alt={alt || "섹션 로고"} className="h-20 md:h-28 object-contain mb-4" />
      <div className="regency-title-ornament">
         <span className="text-accent-gold">✦</span>
      </div>
    </div>
  )
}
