import { ViewState } from '../App';
import { BackButton, SectionHeader } from './Shared';
import { socialClubsData } from '../data';

export default function SocialClubs({ navigate }: { navigate: (view: ViewState) => void }) {
  return (
    <div className="flex flex-col w-full h-full p-8 overflow-y-auto">
      <BackButton navigate={navigate} />
      <div className="max-w-5xl mx-auto pt-16">
        <SectionHeader logoSrc="https://i.postimg.cc/dQTjNTtR/main.png" alt="사교계 클럽" />
        
        <div className="flex flex-col gap-12 mt-12 px-4 pb-20">
          {socialClubsData.map((club) => (
            <div key={club.id} className="flex flex-col md:flex-row gap-8 items-center md:items-start group bg-white/90 p-6 md:p-8 shadow-sm border border-accent-gold/20">
              <div className="w-full md:w-1/2 md:max-w-sm shrink-0 aspect-[3/1] flex items-center justify-center relative transition-all duration-300">
                {club.logo.startsWith('■') ? (
                  <div className="text-center w-full h-full flex flex-col items-center justify-center">
                    <span className="text-sm text-accent-gold-dark opacity-60 font-serif">
                      {club.logo}
                    </span>
                    <span className="text-xs text-accent-gold-dark opacity-40 font-serif mt-1">
                      (3:1 가로형 로고)
                    </span>
                  </div>
                ) : (
                  <img src={club.logo} alt={club.name} className="w-full h-full object-contain" />
                )}
              </div>
              <div className="w-full flex-1 flex flex-col justify-center">
                <h3 className="font-display text-2xl text-accent-gold-dark mb-4 text-center md:text-left">{club.name}</h3>
                <div className="relative">
                  <p className="font-body text-base leading-relaxed text-text-main/80 text-justify md:text-left break-keep">
                    {club.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
