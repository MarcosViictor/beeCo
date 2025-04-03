import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Teste } from '@/pages/Teste'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

function App() {
  return (
    <BrowserRouter>
      {/* importar header, menu, footer aqui */}
      <Header />
      <Routes>
        <Route path='/' element={<Teste />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
