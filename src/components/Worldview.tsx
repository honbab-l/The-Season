import { loreData } from '../data';
import { ViewState } from '../App';
import { BackButton, SectionHeader } from './Shared';
import { motion } from 'motion/react';

export default function Worldview({ navigate }: { navigate: (v: ViewState) => void }) {
  return (
    <div className="w-full h-full overflow-y-auto px-4 pb-24">
      <BackButton navigate={navigate} />
      
      <div className="max-w-4xl mx-auto pt-16">
        <SectionHeader logoSrc="https://i.postimg.cc/dQTjNTtR/main.png" alt="사교계의 법칙" />
        
        <div className="flex flex-col gap-12">
          {loreData.map((lore, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="regency-frame group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-primary-base">
                <span className="font-display text-2xl text-accent-gold-dark italic">{(index + 1).toString().padStart(2, '0')}</span>
              </div>
              <h3 className="text-2xl font-serif text-center mb-6 text-text-main group-hover:text-accent-gold-dark transition-colors">{lore.title}</h3>
              {lore.description && (
                <p className="text-base sm:text-lg leading-relaxed text-text-light font-body text-justify font-medium opacity-90 indent-4 mb-4">
                  {lore.description}
                </p>
              )}
              {lore.items && lore.items.length > 0 && (
                <div className="flex flex-col gap-4 mt-4">
                  {lore.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-2">
                      <div className="font-serif font-bold text-accent-gold-dark min-w-max whitespace-nowrap">￭ {item.label}</div>
                      <p className="text-base leading-relaxed text-text-light font-body text-justify opacity-90">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
