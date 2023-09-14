import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <header>
        <h1>Home</h1>

        <p>Meu nome é Rafael, tenho 17 anos e tenho uma vontade imensa de começar um estagio na area de Front-end</p>
        <Link to={"/curriculo"}>Curriculo</Link>
    </header>
  )
}

export default Home