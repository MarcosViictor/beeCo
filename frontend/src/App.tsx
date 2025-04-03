import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Teste } from '@/pages/Teste'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { RegisterOptionUser } from '@/pages/RegisterOptionUser'
function App() {
  return (
    <BrowserRouter>
      {/* importar header, menu, footer aqui */}
      <Header />
      <Routes>
        <Route path='/' element={<Teste />} />
      </Routes>
      <Footer />
          <Routes>
            <Route path="/" element={<Teste />} />
            <Route path="/register-option" element={<RegisterOptionUser />} />
          </Routes>
          
      
    </BrowserRouter>
  )
}

export default App
