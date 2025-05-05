import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/pages/Login'
import { RegisterProfessional } from '@/pages/RegisterProfessional'
import { RegisterClient } from '@/pages/RegisterClient'
import { RegisterOptionUser } from '@/pages/RegisterOptionUser'
import { Home } from '@/pages/Home'
import { AnnouncementPage } from './pages/AnnouncementPage'
import { SearchProfessional } from './pages/SearchProfessional'
import { Chat } from './pages/Chat'
import { ContractingArea } from './pages/ContractingArea'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/announcement' element={<AnnouncementPage />} />
        <Route path='/contracting' element={<ContractingArea />} />
        <Route path='/select/register' element={<RegisterOptionUser />} />
        <Route
          path='/professional/register'
          element={<RegisterProfessional />}
        />
        <Route path='/register' element={<RegisterClient />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<SearchProfessional />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
