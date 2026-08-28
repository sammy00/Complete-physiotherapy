import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './Components/layout/Header'
import Footer from './Components/layout/Footer'
import FloatingWhatsApp from './Components/layout/FloatingWhatsApp'
import ScrollToHash from './Components/layout/ScrollToHash'
import Homepage from './Pages/Homepage'
import ContactPage from './Pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  )
}

export default App
