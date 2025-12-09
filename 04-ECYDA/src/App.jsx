import "./App.css"
import { Header } from "./components/Header.jsx"
import {InfoCard} from "./components/InfoCard.jsx"
import { Cards } from "./components/Cards.jsx"
import { Barra } from "./components/Barra.jsx"
import { Tips } from "./components/Tips.jsx"
import { Datos } from "./components/Datos.jsx"
import { Boton } from "./components/Boton.jsx"
import { Header2 } from "./components/Header2.jsx"
import { Meaning } from "./components/Meaning.jsx"
import { Valores } from "./components/Valores.jsx"
import { Objetivos } from "./components/Objetivos.jsx"
import { Footer } from "./components/Footer.jsx"

export const App = () => {
    return(
        <>
        <Header
         headerColor="bg-green"
         header2Color="bg-lightColor"
        />
        <InfoCard
         BgImg="bg-img"
        />
        <Cards
         bgImg="bg-fact2"
         bgImg2="bg-fact3"
         bgR="bg-Rect"
         />
        <Barra
        bgIMG="bg-Img5"
         />
        <Tips
         fcolor="f-color1"
         fcolor2="f-color2"
        />
        <Datos
         focolor2="fondo"
         focolor="fondo2"
         />
        <Boton
         btncolor="bg-lightColor"
         fondob="back"
         />
        <Footer
         headerColor="bg-green"
         /> 
       {/*  <Header2
         headerColor="bg-green"
        />
        <Meaning
         Filasbg="bgIma"
         />
        <Valores
         Fondo="fondoval"
         Fondo2="fondoval2"
         Fondo3="fondoval3"
         Fondo4="fondoval4"
         />
        <Objetivos
         />
        <Footer
         headerColor="bg-green"
         /> */}
        </>
    )
}