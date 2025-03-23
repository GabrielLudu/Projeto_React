import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, replace, Route, Routes } from 'react-router'
import './index.css'
import Login from './components/login'
import Register from './components/register'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="auth" replace />} />
      <Route path="auth" >
        <Route path="login" element={<Login />} />
        <Route index element={<Navigate to="login" replace />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
