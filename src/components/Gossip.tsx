import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewState } from '../App';
import { BackButton, SectionHeader } from './Shared';
import { gossipData } from '../data';

export default function Gossip({ navigate }: { navigate: (view: ViewState) => void }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = gossipData.find(g => g.id === selectedId);

  return (
    <div className="relative w-full h-full p-8 overflow-hidden flex flex-col">
      <div className="relative z-20">
        <BackButton navigate={navigate} />
      </div>
      
      {/* Title */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
         <SectionHeader logoSrc="https://i.postimg.cc/dQTjNTtR/main.png" alt="위스퍼러" />
      </div>

      <div className="relative flex-1 w-full mt-24 overflow-y-auto overflow-x-hidden">
        {/* Scattered items */}
        <div className="relative w-full h-[300vh] min-h-[1500px] max-w-5xl mx-auto">
          {gossipData.map((item) => (
             <motion.div
               key={item.id}
               className="absolute cursor-pointer flex items-center justify-center p-2 bg-[#fdfaf6] border border-accent-gold/40 shadow-md hover:shadow-xl transition-shadow"
               style={{ 
                 // 3:4 ratio container
                 width: 'clamp(140px, 25vw, 240px)', 
                 aspectRatio: '3/4',
                 left: `${item.left}%`,
                 top: `${item.top}%`,
                 x: '-50%',
                 y: '-50%',
                 rotate: item.rotation
               }}
               whileHover={{ scale: 1.05, zIndex: 30 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => setSelectedId(item.id)}
             >
               {item.image.startsWith('■') ? (
                 <div className="text-xs w-full h-full flex items-center justify-center text-center text-accent-gold-dark opacity-50 font-serif border border-dashed border-accent-gold-dark/30">
                   {item.image}
                 </div>
               ) : (
                 <img src={item.image} alt="가십" className="w-full h-full object-cover" />
               )}
             </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-primary-base/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedId(null)}
          >
             <motion.div
               initial={{ scale: 0.8, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.8, y: 20 }}
               className="bg-[#fdfaf6] border-2 border-accent-gold shadow-2xl p-4 cursor-default"
               style={{ 
                 width: '100%', 
                 maxWidth: '450px',
                 aspectRatio: '3/4'
               }}
               onClick={(e) => e.stopPropagation()}
             >
               {selectedItem.image.startsWith('■') ? (
                 <div className="w-full h-full flex flex-col items-center justify-center text-center text-accent-gold-dark font-serif border border-accent-gold/20">
                   <span className="text-lg mb-2">{selectedItem.image}</span>
                   <span className="text-sm opacity-50">(3:4 세로 비율 이미지 교체 필요)</span>
                 </div>
               ) : (
                 <img src={selectedItem.image} alt="가십 확대" className="w-full h-full object-cover shadow-sm" />
               )}
             </motion.div>
             <button 
               className="absolute top-8 right-8 text-text-main/60 hover:text-text-main transition-colors text-5xl font-light"
               onClick={() => setSelectedId(null)}
             >
               ×
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
