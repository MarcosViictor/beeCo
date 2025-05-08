import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/pages/Login'
import { RegisterProfessional } from '@/pages/RegisterProfessional'
import { RegisterClient } from '@/pages/RegisterClient'
import { RegisterOptionUser } from '@/pages/RegisterOptionUser'
import { Home } from '@/pages/Home'
import { DashboardProfissional } from './pages/DashboardProfissional'
import { SearchProfessional } from './pages/SearchProfessional'
import { Chat } from './pages/Chat'
import { Profile } from './pages/Profile'
import { Favorites } from './pages/Favorites'
import { ContractingArea } from './pages/ContractingArea'


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard-profissional' element={<DashboardProfissional />} />
        <Route path='/contracting' element={<ContractingArea />} />
        <Route path='/select/register' element={<RegisterOptionUser />} />
        <Route path='/professional/register' element={<RegisterProfessional />}/>
        <Route path='/register' element={<RegisterClient />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<SearchProfessional />} />
        <Route path='/chat' element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
