import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import sponsorStyles from "../styles/sponsors.module.css"
import Image from "../components/image"
import ExternalLink from "./external-link"

export default function Sponsors() {
  const data = useStaticQuery(graphql`
    query SponsorSectionData {
      allSponsorDataJson {
        nodes {
          id
          imgPath
          link
        }
      }
    }
  `)

  return data.allSponsorDataJson.nodes.map(node => (
    <ExternalLink
      key={node.id}
      className={sponsorStyles.sponsorImage}
      href={node.link}
    >
      <div className="column">
        <div>
          <Image
            className={sponsorStyles.sponsorImage}
            alt="Profile Picture"
            filename={node.imgPath}
          />
        </div>
      </div>
    </ExternalLink>
  ))
}
