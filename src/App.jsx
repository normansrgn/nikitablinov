import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Trainers from './pages/Trainers'
import Schedule from './pages/Schedule'
import News from './pages/News'
import Contacts from './pages/Contacts'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <ScrollToTop />
      <div key={location.pathname} className="page-enter">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Layout>
  )
}
