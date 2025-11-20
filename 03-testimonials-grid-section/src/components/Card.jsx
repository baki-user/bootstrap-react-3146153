import "../stylesheets/Card.css"

export const Card = ({cardImage,cardTitle,cardSubtitle,cardTitle2,cardDescription,cardColor,textColor}) => {
    return (
        <div className={`.Card  m-auto mt-3 rounded-4 row ${cardColor}`}>
            <div className=".card-body  d-flex p-2 mt-2 col" >
                <div>
                 <img className="icon rounded-circle" src={cardImage} alt="" />
                </div>
                <div>
                 <h1 className={`.card-title ps-3 fs-4 ${textColor}`}>{cardTitle}</h1>
                 <p className={`.card-subtitle ps-3 ${textColor}`}>{cardSubtitle}</p>
                </div>
            </div>
            <div>
                <h1 className={`.card-title fs-6 mt-1 ms- ${textColor}`}>{cardTitle2}</h1>
                <p className={`.card-subtitle fs7 mt-2 ms- ${textColor}`}>{cardDescription}</p>
            </div>

        </div>
    )
}
