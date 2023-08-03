import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './global.css'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  </Router>
)
