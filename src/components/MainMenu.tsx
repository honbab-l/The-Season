import { motion } from 'motion/react';
import { ViewState } from '../App';

export default function MainMenu({ navigate }: { navigate: (view: ViewState) => void }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8 overflow-y-auto">
      <div className="w-full max-w-3xl text-center regency-frame">
        <img src="■메인로고" alt="연대기의 서막 로고" className="h-24 md:h-32 object-contain mx-auto mb-2" />
        <div className="regency-title-ornament">
          <span className="text-accent-gold">✧</span>
        </div>
        
        <p className="max-w-xl mx-auto mb-12 leading-relaxed text-center font-body text-text-light">
          이곳은 눈부시게 화려하고도 은밀한 리젠시 시대의 무대입니다.<br/>
          아름다운 무도회장의 불빛 아래 피어나는 로맨스와<br/>
          명예를 둘러싼 귀족들의 섬세한 이야기를 만나보세요.
        </p>

        <div className="flex flex-col gap-6 w-64 mx-auto">
          <MenuButton onClick={() => navigate('worldview')} text="세계관 안내" />
          <MenuButton onClick={() => navigate('characters')} text="인물 사전" />
          <MenuButton onClick={() => navigate('geography')} text="주요 명소" />
        </div>
      </div>
    </div>
  );
}

function MenuButton({ onClick, text }: { onClick: () => void, text: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="regency-button group"
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 transition-opacity opacity-0 bg-accent-gold/10 group-hover:opacity-100"></div>
    </motion.button>
  );
}
