import { Route, Routes } from 'react-router-dom'
import './AppRoutes.css'

import MainLayout from './layouts/MainLayout'
import HomePage from './features/home/page/HomePage'
import Login from './features/auth/components/Login'

function AppRoutes() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </MainLayout>
  )
}

export default AppRoutes;
