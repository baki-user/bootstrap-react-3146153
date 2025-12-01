import "./App.css"
import { Header } from "./components/Header.jsx"
import {InfoCard} from "./components/InfoCard.jsx"
import { Cards } from "./components/Cards.jsx"

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
        />
        </>
    )
}