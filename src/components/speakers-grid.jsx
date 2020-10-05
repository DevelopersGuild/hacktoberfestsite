import React from "react"
import speakerStyles from "../styles/speakers-grid.module.css"
import Zoom from "react-reveal/Zoom"
import { graphql, useStaticQuery } from "gatsby"
import Image from "../components/image"

export default function SpeakersGrid() {
  const data = useStaticQuery(graphql`
    query SpeakerSectionData {
      allSpeakersDataJson {
        nodes {
          id
          name
          description
          imgPath
          profileLink
        }
      }
    }
  `)

  return data.allSpeakersDataJson.nodes.map(node => (
    <Zoom key={node.id}>
      <div
        className={speakerStyles.speaker}
        onClick={function (e) {
          window.open(node.profileLink, "__blank")
        }}
      >
        <div className="column">
          <div className={`card ${speakerStyles.card}`}>
            <div>
              <Image
                className={speakerStyles.profileImage}
                alt="Profile Picture"
                filename={node.imgPath}
              />
            </div>
            <div className="container">
              <h2>{node.name}</h2>
              <p>{node.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  ))
}
