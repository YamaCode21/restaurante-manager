import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        >
          {/* Al entrar a /dashboard se carga 'Dashboard' por defecto (index) */}
          <Route index element={<Dashboard />} />
          {/* <Route path="productos" element={<Productos />} /> */}
          {/* <Route path="ordenes" element={<div>Sección de Órdenes</div>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
