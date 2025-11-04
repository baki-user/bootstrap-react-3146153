
import "../stylesheets/ExtensionCard.css"

export const ExtensionCard = () => {
    return (
        <>
            <div className="general">
                <div className="tarjeta">
                    <img className="icon" src="./public/icono.png" alt="" />
                    <div className="text">
                        <h1 className="Title">DevLens</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
