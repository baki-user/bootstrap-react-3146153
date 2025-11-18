import "../stylesheets/Card.css"

export const Card = ({cardImage}) => {
    return (
        <div className=".Card bg-purple m-auto mt-3 rounded row">
            <div className=".card-body  d-flex p-2 mt-2 col" >
                <div>
                 <img className="icon" src={cardImage} alt="" />
                </div>
                <div>
                 <h1 className=".card-title ps-3 fs-4 ">Daniel Clifford</h1>
                 <p className=".card-subtitle ps-3">Verified Graduate</p>
                </div>
            </div>
            <div>
                <h1 className=".card-title fs-6 mt-1 ms-3">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.</h1>
                <p className=".card-subtitle fs7 mt-2 ms-3">I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup.</p>
            </div>

        </div>
    )
}
