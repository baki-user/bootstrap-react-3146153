export function ListaMusica ({portada, songName, artista}) {
    return (
        <>
         <h1>{songName}</h1>
         <img src={portada} alt="" width="150"/>
         <small>{artista}</small>
    
        </>
    )
}