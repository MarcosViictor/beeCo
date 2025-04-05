import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/pages/Login'
import { RegisterProfessional } from '@/pages/RegisterProfessional'
import { RegisterClient } from '@/pages/RegisterClient'
import { RegisterOptionUser } from '@/pages/RegisterOptionUser'
import { Home } from '@/pages/Home'
import { AnnouncementPage } from './pages/AnnouncementPage'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/announcement" element={<AnnouncementPage/>} />
        <Route path="/register-option" element={<RegisterOptionUser />} />
        <Route path="/register-professional" element={<RegisterProfessional />} />
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
