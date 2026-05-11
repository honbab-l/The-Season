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

export function SectionHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col items-center mt-12 mb-16 text-center">
      <h2 className="text-4xl md:text-5xl font-display">{title}</h2>
      <div className="regency-title-ornament">
         <span className="text-accent-gold">✦</span>
      </div>
      {subtitle && <p className="max-w-2xl text-lg font-serif italic text-text-light">{subtitle}</p>}
    </div>
  )
}
