import React from "react"
import JSONData from '../data/speakersData.json'
import speakerStyles from "../styles/speakers-grid.module.css"
import { graphql } from "gatsby"
import Image from '../components/image'
import Zoom from 'react-reveal/Zoom';





export default function SpeakersGrid() {


  return (
    JSONData.map((speaker, index) =>
      <Zoom>
        <div className={speakerStyles.speaker} onClick={function (e) {
          window.open(speaker.profileLink, '__blank')
        }}>
          <div className="column">
            <div className="card">
              <div>
                <Image
                  className={speakerStyles.profileImage}
                  alt="Profile Picture"
                  filename={speaker.imgPath}
                />
              </div>
              <div className="container">
                <h2>{speaker.name}</h2>
                <p>{speaker.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    )
  )

}


