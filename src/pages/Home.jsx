import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import StatsStrip from '../components/StatsStrip.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Architecture from '../components/Architecture.jsx'
import Footer from '../components/Footer.jsx'
import './home.css'

export default function Home() {
  const { hash } = useLocation()

  // Support deep links / cross-page anchors like /#how and /#architecture.
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <div className="page page--home">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <HowItWorks />
        <Architecture />
      </main>
      <Footer />
    </div>
  )
}
