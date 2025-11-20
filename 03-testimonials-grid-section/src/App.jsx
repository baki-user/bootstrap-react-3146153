import "./App.css"
import { Card } from "./components/Card"

export const App = () => {
  return (
    <>

      <div className="container">
        <div className="row mt-5 ">
          <div className="col-12 col-lg-9">
            <div className="row  ">
              <div className="h-100 col-12 col-lg-8">
                <Card
                  textColor="text-light"
                  cardColor="bg-purple"
                  cardImage="./public/image-daniel.jpg"
                  cardTitle="Daniel Clifford"
                  cardSubtitle="Verified Graduate"
                  cardTitle2="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth."
                  cardDescription="I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life."
                />
              </div>
              <div className=" h-100 col-12 col-lg-4">
                <Card
                  textColor="text-light"
                  cardColor="bg-bluedark"
                  cardImage="./public/image-jonathan.jpg"
                  cardTitle="Jonathan Walters"
                  cardSubtitle="Verified Graduate"
                  cardTitle2="The team was very supportive and kept me motivated"
                  cardDescription="I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself"

                />
              </div>
              <div className="h-100 col-12 col-lg-4">
                <Card
                  textColor="text-black"
                  cardColor="bg-white"
                  cardImage="./public/image-jeanette.jpg"
                  cardTitle="Jeanette Harmon"
                  cardSubtitle="Verified Graduate"
                  cardTitle2="An overall wonderful and rewarding experience"
                  cardDescription="Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.Getting guidance from them and learning "

                />
              </div>
              <div className="h-100 col-12 col-lg-8">
                <Card
                  textColor="text-light"
                  cardColor="bg-black"
                  cardImage="./public/image-patrick.jpg"
                  cardTitle="Patrick Abrams"
                  cardSubtitle="Verified Graduate"
                  cardTitle2="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.-"
                  cardDescription="The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."

                />
              </div>
            </div>
          </div>
          <div className="h-100 col-12 col-lg-3">
            <Card
              textColor="text-black"
              cardColor="bg-white"
              cardImage="./public/image-kira.jpg"
              cardTitle="Kira Whittle"
              cardSubtitle="Verified Graduate"
              cardTitle2="Such a life-changing experience. Highly recommend!"
              cardDescription="Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my development."

            />
          </div>
        </div>
      </div>

    </>
  )
}