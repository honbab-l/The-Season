import { useState } from 'react';
import { characterData } from '../data';
import { ViewState } from '../App';
import { BackButton, SectionHeader } from './Shared';
import { motion, AnimatePresence } from 'motion/react';

type CharacterInfo = typeof characterData[0];

export default function Characters({ navigate }: { navigate: (v: ViewState) => void }) {
  const [selectedChar, setSelectedChar] = useState<CharacterInfo | null>(null);

  return (
    <div className="w-full h-full overflow-y-auto px-4 pb-24">
      <BackButton navigate={navigate} />
      
      <div className="max-w-7xl mx-auto pt-16">
        <SectionHeader 
          title="사교계의 인물들" 
          subtitle="스캔들의 중심이자 가장 매혹적인 주역들"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {characterData.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedChar(char)}
              className="cursor-pointer group flex flex-col items-center"
            >
              <div className="w-full aspect-[3/4] p-2 bg-white/70 shadow-elegant border border-accent-gold/20 rounded-sm mb-4 relative overflow-hidden">
                 <div className="absolute inset-0 border-[3px] border-double border-accent-gold/40 m-2 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <img 
                   src={char.mainImage} 
                   alt={char.name} 
                   className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                   loading="lazy"
                 />
              </div>
              <h3 className="font-serif text-xl mb-1">{char.name}</h3>
              <p className="font-body text-sm text-text-light/70">{char.family}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Character Detail Modal */}
      <AnimatePresence>
        {selectedChar && (
          <CharacterModal char={selectedChar} onClose={() => setSelectedChar(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function CharacterModal({ char, onClose }: { char: CharacterInfo, onClose: () => void }) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-primary-base rounded-lg shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 text-text-main hover:bg-accent-gold hover:text-white transition-colors z-10"
        >
          ✕
        </button>
        
        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Left: Main Image & Small gallery */}
          <div className="w-full md:w-5/12 p-6 bg-white/40 border-r border-accent-gold/20 flex flex-col items-center">
             <div className="w-full aspect-[3/4] p-2 bg-white shadow-md border border-accent-gold/30 mb-6">
                <img src={char.mainImage} alt={char.name} className="w-full h-full object-cover" />
             </div>
             
             <div className="grid grid-cols-3 gap-2 w-full">
                {char.subImages.map((img, i) => (
                  <div 
                    key={i} 
                    className="aspect-square cursor-zoom-in overflow-hidden border border-accent-gold/50 shadow-sm hover:border-accent-gold-dark transition-colors"
                    onClick={() => setZoomedImage(img)}
                  >
                    <img src={img} alt={`${char.name} detail ${i+1}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all" />
                  </div>
                ))}
             </div>
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
            <p className="text-accent-gold-dark font-serif italic mb-2 tracking-wide">{char.family}</p>
            <h2 className="text-4xl md:text-5xl font-display mb-6">{char.name}</h2>
            
            <div className="h-px bg-gradient-to-r from-accent-gold-dark to-transparent w-full mb-8"></div>
            
            <p className="text-xl font-serif text-text-light mb-6 italic border-l-4 border-accent-gold-dark/40 pl-4">
              "{char.shortDesc}"
            </p>
            
            <p className="font-body text-lg leading-loose text-text-main">
              {char.description}
            </p>
            
            {/* Ornate decorative element at bottom */}
            <div className="mt-auto pt-10 flex justify-center opacity-50">
               <span className="font-display text-4xl text-accent-gold">❦</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={(e) => { e.stopPropagation(); setZoomedImage(null); }}
          >
             <img src={zoomedImage} alt="Zoomed detail" className="max-w-full max-h-full object-contain shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
