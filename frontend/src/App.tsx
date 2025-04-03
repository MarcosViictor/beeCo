import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Teste } from '@/pages/Teste'
import { Login } from '@/pages/Login'

import { RegisterOptionUser } from '@/pages/RegisterOptionUser'
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Teste />} />
        <Route path="/register-option" element={<RegisterOptionUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
