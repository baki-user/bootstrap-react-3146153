

export const Card = () => {
    return (
        <div className="Card">
            <div className="m-auto mt-3" style={{width:"80px", height:  "80px"}}>
                <img className="icon" src={cardImage} alt="" />
                <h1 className="Name">{cardName}</h1>
                <p className="NameDescription">{cardDesc}</p>
            </div>
            <div>
                <h1 className="Title">{cardTitle}</h1>
                <p>{cardDescription}</p>
            </div>

        </div>
    )
}
