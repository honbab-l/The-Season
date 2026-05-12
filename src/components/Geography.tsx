import { useState } from 'react';
import { geographyData } from '../data';
import { ViewState } from '../App';
import { BackButton, SectionHeader } from './Shared';
import { motion, AnimatePresence } from 'motion/react';

type LocationInfo = typeof geographyData[0];

export default function Geography({ navigate }: { navigate: (v: ViewState) => void }) {
  const [selectedLoc, setSelectedLoc] = useState<LocationInfo | null>(null);

  return (
    <div className="w-full h-full overflow-y-auto px-4 pb-24">
      <BackButton navigate={navigate} />
      
      <div className="max-w-6xl mx-auto pt-16">
        <SectionHeader logoSrc="https://i.postimg.cc/dQTjNTtR/main.png" alt="로맨스 지도" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pl-4 pr-4">
          {geographyData.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.15 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedLoc(loc)}
              className="cursor-pointer group relative"
            >
              {/* Ornate Frame Concept */}
              <div className="aspect-square bg-white shadow-elegant p-3 border border-accent-gold/20 relative z-10 transition-all duration-300 group-hover:border-accent-gold-dark/60 group-hover:shadow-glow">
                <div className="w-full h-full overflow-hidden relative">
                   <div className="absolute inset-0 bg-accent-gold/20 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                   <img 
                     src={loc.image} 
                     alt={loc.name} 
                     className="w-full h-full object-cover grayscale-[30%] sepia-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                   />
                </div>
              </div>
              {/* Floating label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white border border-accent-gold-dark/30 shadow-md py-3 px-2 text-center z-20 group-hover:bg-accent-gold-dark group-hover:text-white transition-colors duration-300">
                <h3 className="font-serif text-lg tracking-wide">{loc.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Location Modal */}
      <AnimatePresence>
        {selectedLoc && (
          <LocationModal loc={selectedLoc} onClose={() => setSelectedLoc(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function LocationModal({ loc, onClose }: { loc: LocationInfo, onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="w-full max-w-xl bg-primary-base rounded-sm shadow-2xl relative border-[4px] border-double border-accent-gold/50 flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-accent-gold text-white hover:bg-text-main shadow-lg transition-colors z-10"
        >
          ✕
        </button>
        
        {/* Top Image */}
        <div className="w-full aspect-square p-2 bg-white pb-0">
          <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
        </div>
        
        {/* Bottom Description */}
        <div className="p-8 md:p-10 text-center bg-white m-2 mt-0 relative">
          <h2 className="text-3xl font-display mb-4 text-text-main">{loc.name}</h2>
          <div className="w-16 h-px bg-accent-gold-dark mx-auto mb-6"></div>
          <p className="font-body text-lg leading-relaxed text-text-light">
            {loc.description}
          </p>
          <div className="mt-8 font-display text-accent-gold/40 text-2xl">✻</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
