import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Teste } from '@/pages/Teste'
import { RegisterOptionUser } from '@/pages/RegisterOptionUser'
function App() {
  return (
    <BrowserRouter>
      {/* importar header, menu, footer aqui */}
          <Routes>
            <Route path="/" element={<Teste />} />
            <Route path="/register-option" element={<RegisterOptionUser />} />
          </Routes>
          
      
    </BrowserRouter>
  )
}

export default App
