import "../stylesheet/Tips.css"
export const Tips = ({fcolor, fcolor2}) => {
    return (
        <div className={`${fcolor}`} style={{minWidth: "400px"}}>
            <div className="container">
            <h1 className="text-center">TIPS PARA REDUCIR EL DAÑO AMBIENTAL</h1>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src="./cora.png" alt="Bootstrap" width="414px" />
                        <div className={`card-body ${fcolor2}`}>
                            <p className="card-text text-center">Planta árboles y cuida áreas verdes.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./bolsa.png" alt="Bootstrap" width="414px" />
                        <div className={`card-body ${fcolor2}`}>
                            <p className="card-text text-center">Usa productos ecológicos.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./auto.png" alt="Bootstrap" width="414px" />
                        <div className={`card-body ${fcolor2}`}>
                            <p className="card-text text-center">Usa transporte sostenible.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}