import { Routes, Route } from "react-router-dom"

import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    )
}