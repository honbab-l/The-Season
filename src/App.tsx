import { useState, useRef, useEffect, ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import ReactPlayer from 'react-player';
import StartScreen from './components/StartScreen';
import MainMenu from './components/MainMenu';
import Worldview from './components/Worldview';
import Characters from './components/Characters';
import Geography from './components/Geography';

export type ViewState = 'start' | 'main' | 'worldview' | 'characters' | 'geography';

function PageWrapper({ children, viewKey }: { children: ReactNode, viewKey: string }) {
  return (
    <motion.div
      key={viewKey}
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('start');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnterContext = () => {
    setCurrentView('main');
    setIsPlaying(true);
  };
  
  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="relative w-full h-screen overflow-hidden text-text-main selection:bg-accent-gold/30 selection:text-text-main">
      {/* ■음악파일넣는위치 : 유튜브 링크 한곡 반복 */}
      <div className="absolute w-0 h-0 opacity-0 pointer-events-none">
        <ReactPlayer
          url="https://youtu.be/zFzjOkQa1T4?si=tfsHUyr40puZQWy_"
          playing={isPlaying}
          loop={true}
          volume={0.5}
          width="0"
          height="0"
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
              }
            }
          }}
        />
      </div>

      {/* Persistent Audio Control (except on start screen) */}
      <AnimatePresence>
        {currentView !== 'start' && (
          <motion.button 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={toggleAudio}
            className="fixed z-50 p-3 transition-colors rounded-full top-6 right-6 bg-white/50 backdrop-blur-md border border-white/40 hover:bg-white text-accent-gold-dark shadow-elegant"
            title="Toggle Music"
          >
            {isPlaying ? (
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
            ) : (
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          {currentView === 'start' && (
            <PageWrapper viewKey="start">
              <StartScreen onEnter={handleEnterContext} />
            </PageWrapper>
          )}
          {currentView === 'main' && (
             <PageWrapper viewKey="main">
               <MainMenu navigate={setCurrentView} />
             </PageWrapper>
          )}
          {currentView === 'worldview' && (
             <PageWrapper viewKey="worldview">
               <Worldview navigate={setCurrentView} />
             </PageWrapper>
          )}
          {currentView === 'characters' && (
             <PageWrapper viewKey="characters">
               <Characters navigate={setCurrentView} />
             </PageWrapper>
          )}
          {currentView === 'geography' && (
             <PageWrapper viewKey="geography">
               <Geography navigate={setCurrentView} />
             </PageWrapper>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
