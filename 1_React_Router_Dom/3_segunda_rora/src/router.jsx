import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Usuaurio from "./pages/Usuaurio"

function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Usuaurio />} />
        </Routes>
    )
}

export default Router