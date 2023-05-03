import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Notification from './components/Notification'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-3xl">
      {/* CREATE AN HOME COMPONENT WHEN OTHER COMPONENTS (pages) ARE READY. */}
      <Hero />
      <Features />
      <Benefits />
      <Notification />
      <Footer />
    </div>
  )
}

export default App
