import "./App.css"
import { Header } from "./components/Header.jsx"
import {InfoCard} from "./components/InfoCard.jsx"
import { Cards } from "./components/Cards.jsx"
import { Barra } from "./components/Barra.jsx"
import { Tips } from "./components/Tips.jsx"
import { Datos } from "./components/Datos.jsx"

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
        />
        </>
    )
}