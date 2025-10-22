import { InfoCard } from "./components/InfoCard"
import "./App.css"
import { UserCard } from "./components/UserCard"
import { ListaMusica } from "./components/ListaMusica"

export function App () {
  return (
    <div>
      <h1>App</h1>
      <InfoCard/>
      <UserCard 
        image="https://rickandmortyapi.com/api/character/avatar/618.jpeg"
        userName="Private Smith"
        
      />
      <UserCard 
        image="https://rickandmortyapi.com/api/character/avatar/570.jpeg"
        userName="Chachi"
        
      />
      <UserCard 
        image="https://rickandmortyapi.com/api/character/avatar/235.jpeg"
        userName="Mortytown Loco"
        
      />
      <UserCard 
        image="https://rickandmortyapi.com/api/character/avatar/630.jpeg"
        userName="Morty Smith"
        
      />
      <ListaMusica
        portada="https://i.ytimg.com/vi/jtBmowJLc94/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDue_FgME2SfS2HPv13-cubj-8sGw"
        songName="Cherry Waves"
        artista="Deftones"
      
      />
      <ListaMusica
        portada="https://i.ytimg.com/vi/fZcAQ0kuw1s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBRx9uvpdGrOJ00viO2IrhNZphQhw"
        songName="Rosemary"
        artista="Deftones"
      
      />
      <ListaMusica
        portada="https://i.ytimg.com/vi/Ms_v51JKaWU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnoYzEclkHSPvkPYrCWIRKKAUoaA"
        songName="Beauty School"
        artista="Deftones"
      
      />
      <ListaMusica
        portada="https://i.ytimg.com/vi/_t1vqLwqbyA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA8l13I4bgG1ikH_KS4_-P_JPqBPQ"
        songName="Be quiet and drive(Far away)"
        artista="Deftones"
      
      />
    </div>
  )
}