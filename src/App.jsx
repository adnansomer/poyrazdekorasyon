import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCall from './components/FloatingCall'
import AnaSayfa from './pages/AnaSayfa'
import YapilanIsler from './pages/YapilanIsler'
import Hakkimizda from './pages/Hakkimizda'
import Hizmetler from './pages/Hizmetler'
import Iletisim from './pages/Iletisim'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/yapilan-isler" element={<YapilanIsler />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/hizmetler" element={<Hizmetler />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="*" element={<AnaSayfa />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCall />
    </>
  )
}
