import "../stylesheet/Barra.css"
export const Barra = ({bgIMG}) => {
    return (
        <div>
            <div className="card" style={{ minWidth: "200px" }}>
                <div className={`card-body ${bgIMG}`}>
                    <h5 className="card-title">Somos una marca enfocada en desarrollar un proyecto multimedial transmedia para concienciar, entretener y enseñar acerca del calentamiento goblal y sus consecuencias.</h5>
                </div>
            </div>
        </div>
    )
}