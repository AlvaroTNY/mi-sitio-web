import React from "react"
import Navbar from "./componentes/Navbar/Navbar"
import Hero from "./componentes/Hero/Hero"
import Quotes from "./componentes/Quotes/Quotes"
import IconSection from "./componentes/IconSection/IconSection"
import Imgblock from "./componentes/Imgblock/Imgblock"
import Data from "./componentes/Datadb/Datadb"
import Footer from "./componentes/footer/footer"


function App(){
    return(
        <main style={{backgroundColor: 'var(--bg-color)'}} 
        className="overflow-x-hidden bg-white duration-300">
            <Navbar/>
            <Hero/>
            <Quotes/>
            <IconSection/>
            <Imgblock/>
            <Data/>
            <Footer/>
        </main>
    )
}

export default App