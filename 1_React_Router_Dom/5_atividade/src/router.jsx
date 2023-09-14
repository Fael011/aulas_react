import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Curriculo from "./pages/Curriculo"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/curriculo" element={<Curriculo />}/>
        </Routes>
    )

}

export default Router