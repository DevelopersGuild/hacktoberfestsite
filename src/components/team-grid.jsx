import React from "react"
import teamStyles from "../styles/team-grid.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Image from "../components/image"

export default function TeamGrid() {
  const data = useStaticQuery(graphql`
    query TeamSectionData {
      allTeamDataJson {
        nodes {
          id
          name
          imgPath
          profileLink
        }
      }
    }
  `)

  return data.allTeamDataJson.nodes.map(node => (
    <div
      key={node.id}
      className={teamStyles.teamMember}
      // onClick={_ =>
      //   node.profileLink ? window.open(node.profileLink, "__blank") : null
      // }
    >
      <div className="column">
        <div>
          <Image
            className={teamStyles.profileImage}
            alt="Profile Picture"
            filename={node.imgPath}
          />
        </div>
        <div className="container">
          <h2>{node.name}</h2>
        </div>
      </div>
    </div>
  ))
}
