import React from "react"
import JSONData from '../data/teamData.json'
import teamStyles from "../styles/team-grid.module.css"
import { graphql } from "gatsby"
import Image from '../components/image'
import Zoom from 'react-reveal/Zoom';
import { Parallax } from 'react-scroll-parallax';





export default function TeamGrid() {


  return (
    JSONData.map((speaker, index) =>
      
        <div className={teamStyles.teamMember} onClick={function (e) {
          window.open(speaker.profileLink, '__blank')
        }}>
          <div className="column">
              <div>
                <Image
                  className={teamStyles.profileImage}
                  alt="Profile Picture"
                  filename={speaker.imgPath}
                />
              </div>
              <div className="container">
                <h2>{speaker.name}</h2>
              </div>
            </div>
        </div>
    )
  )

}


