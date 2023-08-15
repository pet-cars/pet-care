import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './styles/global.css'

import Header from './components/Header'
import AllRoutes from './routes'
import Container from './components/Container'
import Home from './pages/Home'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
    <Container>
      <Header />
      <Home />
      {/*<AllRoutes />*/}
    </Container>
    <Footer/>
  </Router>
)
