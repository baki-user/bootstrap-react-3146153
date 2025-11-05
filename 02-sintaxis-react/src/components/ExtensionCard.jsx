
import "../stylesheets/ExtensionCard.css"

export const ExtensionCard = ({cardTitle, cardImage, cardDescription}) => {
    return (
        <>
            <div className="general">
                <div className="tarjeta">
                    <img className="icon" src={cardImage} alt="" />
                    <div className="text">
                        <h1 className="Title">{cardTitle}</h1>
                        <p>{cardDescription}</p>
                    </div>
                </div>
                <div className="botones">
                    <button className="boton1">Remove</button>
                    <div className="boton2">🔴</div>
                </div>
            </div>
        </>
    )
}
