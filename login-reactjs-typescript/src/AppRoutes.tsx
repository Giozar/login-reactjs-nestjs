import { Route, Routes } from 'react-router-dom'
import './AppRoutes.css'

import MainLayout from './layouts/MainLayout'
import HomePage from './features/home/page/HomePage'
import Login from './features/auth/components/Login'
import Register from './features/auth/components/Register'

function AppRoutes() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </MainLayout>
  )
}

export default AppRoutes;
