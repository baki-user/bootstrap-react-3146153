import "../stylesheets/Card.css"

export const Card = ({cardImage,cardTitle,cardSubtitle,cardTitle2,cardDescription,cardColor}) => {
    return (
        <div className={`.Card  m-auto mt-3 rounded row ${cardColor}`}>
            <div className=".card-body  d-flex p-2 mt-2 col" >
                <div>
                 <img className="icon" src={cardImage} alt="" />
                </div>
                <div>
                 <h1 className=".card-title ps-3 fs-4 ">{cardTitle}</h1>
                 <p className=".card-subtitle ps-3">{cardSubtitle}</p>
                </div>
            </div>
            <div>
                <h1 className=".card-title fs-6 mt-1 ms-3">{cardTitle2}</h1>
                <p className=".card-subtitle fs7 mt-2 ms-3">{cardDescription}</p>
            </div>

        </div>
    )
}
