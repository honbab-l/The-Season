import { useState, ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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

  const handleEnterContext = () => {
    setCurrentView('main');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-text-main selection:bg-accent-gold/30 selection:text-text-main">
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
