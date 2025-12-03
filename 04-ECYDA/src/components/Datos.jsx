import "../stylesheet/Datos.css"
export const Datos = ({focolor, focolor2}) => {
    return (
        <div className={`${focolor}`} style={{minWidth: "400px"}}>
            <div className="container">
            <h1 className="text-center">DATOS CURIOSOS SOBRE EL CALENTAMIENTO GLOBAL</h1>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src="./cora.png" alt="Bootstrap" width="414px" />
                        <div className={`card-body ${focolor2}`}>
                            <p className="card-text text-center">Los últimos 9 años han sido los más calurosos jamás registrados: Desde 2015, cada año ha estado entre los más calurosos desde que comenzaron los registros en 1880.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./bolsa.png" alt="Bootstrap" width="414px" />
                        <div className={`card-body ${focolor2}`}>
                            <p className="card-text text-center">Groenlandia y la Antártida están perdiendo hielo a una velocidad récord: Juntos, estos dos lugares pierden más de 400 mil millones de toneladas de hielo al año.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./auto.png" alt="Bootstrap" width="414px" />
                        <div className={`card-body ${focolor2}`}>
                            <p className="card-text text-center">Los desastres naturales son más intensos y frecuentes: El calentamiento global está haciendo que tormentas, incendios forestales, sequías y huracanes sean más destructivos.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}