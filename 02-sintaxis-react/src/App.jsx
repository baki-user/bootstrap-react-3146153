
import "./App.css"
import { NavBar } from './components/NavBar'
import { ExtensionCard } from './components/ExtensionCard'
import { Login } from "./components/Login"
import { ProductoCard } from "./components/ProductoCard"

export const App = () => {
  return (
    <>
     <NavBar/>
     <div className="containerCard">
       <ExtensionCard 
       cardTitle="Google Translate" 
       cardImage="https://images.icon-icons.com/1222/PNG/512/1492616968-18-google-translate-text-language-translation_83413.png" 
       cardDescription="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
       />
       <ExtensionCard 
       cardTitle="Spotify" 
       cardImage="https://m.media-amazon.com/images/I/51rttY7a+9L.png" 
       cardDescription="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
       />
       <ExtensionCard 
       cardTitle="Youtube" 
       cardImage="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" 
       cardDescription="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
       />
       <ExtensionCard 
       cardTitle="Instagram" 
       cardImage="https://i.pinimg.com/736x/bc/21/ae/bc21ae74062c452722b76529d63560bf.jpg" 
       cardDescription="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
       />
       <ExtensionCard 
       cardTitle="X" 
       cardImage="https://img.icons8.com/ios_filled/1200/twitterx.jpg" 
       cardDescription="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
       />
       <ExtensionCard 
       cardTitle="WhatsApp" 
       cardImage="https://img.freepik.com/vector-premium/icono-redondo-aplicacion-whatsapp-mensajero-popular-logotipo-redes-sociales_277909-873.jpg?semt=ais_hybrid&w=740&q=80" 
       cardDescription="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
       />
       <ExtensionCard 
       cardTitle="Roblox" 
       cardImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstY4O4P8VG75NhrfOCHPcaMae6ZsU6WtqTA&s" 
       cardDescription="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
       />
       <ExtensionCard 
       cardTitle="Minecraft" 
       cardImage="https://images.icon-icons.com/1381/PNG/512/minecraft_94415.png" 
       cardDescription="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
       />
       <ExtensionCard 
       cardTitle="Valorant" 
       cardImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhjYniqXU_9z5dMfSIK0eh-yn8A-qeE9Nmw&s" 
       cardDescription="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
       />
     </div>
     <h1>React + Bootstrap</h1>
     <Login

     />
     <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
         <ProductoCard/>

        </div>
        <div className="col-md-6 col-lg-4 mt-4 mt-md-0">
         <ProductoCard/>

        </div>
        <div className="col-md-12 col-lg-4 mt-4 mt-lg-0">
         <ProductoCard/>

        </div>
      </div>
     </div>
    </>
  )
}
