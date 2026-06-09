import Navbar from './Navbar'
import Footer from './Footer'
import GlobalStyles from '../ui/GlobalStyles'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#08080f]">
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
