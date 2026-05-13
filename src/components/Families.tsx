import { ViewState } from '../App';
import { BackButton, SectionHeader } from './Shared';
import { familiesData } from '../data';

export default function Families({ navigate }: { navigate: (view: ViewState) => void }) {
  return (
    <div className="flex flex-col w-full h-full p-8 overflow-y-auto">
      <BackButton navigate={navigate} />
      <div className="max-w-6xl mx-auto pt-16">
        <SectionHeader logoSrc="https://i.postimg.cc/dQTjNTtR/main.png" alt="가문들" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 px-4 pb-20">
          {familiesData.map((family) => (
            <div key={family.id} className="regency-frame flex flex-col items-center text-center p-8 bg-white/90 shadow-sm transition-shadow hover:shadow-md">
              <div className="w-24 h-24 flex items-center justify-center mb-6">
                {family.logo.startsWith('■') ? (
                   <span className="text-xs text-accent-gold-dark opacity-60 font-serif leading-tight break-all p-2 flex flex-col items-center justify-center text-center w-full h-full">
                     {family.logo}
                     <span className="text-[10px] mt-1">(1:1)</span>
                   </span>
                ) : (
                   <img src={family.logo} alt={family.name} className="w-full h-full object-contain" />
                )}
              </div>
              <h3 className="font-display text-2xl text-accent-gold-dark mb-2">{family.name}</h3>
              <div className="flex flex-col items-center w-full mb-6">
                 <div className="w-16 h-px bg-accent-gold/50 mb-4"></div>
                 <div className="font-serif text-xs text-accent-gold-dark italic h-[85px] flex flex-col gap-1.5 justify-start items-center">
                   {family.members.map((member, index) => (
                     <span key={index}>{member}</span>
                   ))}
                 </div>
              </div>
              <p className="font-body text-sm leading-relaxed text-text-main/80 text-justify">
                {family.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
