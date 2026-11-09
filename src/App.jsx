import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useResponsiveScale from './hooks/useResponsiveScale';


import ScreenFrame from './components/ScreenFrame'
import DynamicIsland from './components/DynamicIsland'
import StatusBar from './components/StatusBar'
import HomeScreen from './components/HomeScreen'
import AppWindow from './components/AppWindow'

import './App.css'

function App() {
  const scale = useResponsiveScale();
  const [activeApp, setActiveApp] = useState(null)

  function openApp(appId) {
    setActiveApp(appId)
  }

  function closeApp() {
    setActiveApp(null)
  }

  return (
    <main className="simulator-container">
      <div
        id="wrap"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
      <ScreenFrame>

        <DynamicIsland />
        <StatusBar />

        <HomeScreen onOpenApp={openApp} />

        <AnimatePresence>
          {activeApp && (
            <motion.div
              key={activeApp}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200
              }}
              className="app-overlay"
            >
              <AppWindow
                appId={activeApp}
                onClose={closeApp}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </ScreenFrame>
      </div>
    </main>
  )
}

export default App