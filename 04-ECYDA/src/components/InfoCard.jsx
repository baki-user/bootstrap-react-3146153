import "../stylesheet/InfoCard.css"

export const InfoCard = ({BgImg}) => {
     return(
      <div className={`container position-relative ${BgImg}`}>
        <img src="./public/Logo.png" alt="Bootstrap" width="400"/>
        <h1>El humo del progreso esta nublando nuestro futuro</h1>
      </div>
     )
}