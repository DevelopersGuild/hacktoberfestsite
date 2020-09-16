import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BioCard from "./bio-card"

export default function Team() {
  const data = useStaticQuery(graphql`
    query TeamSectionQuery {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 1500, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <BioCard
        title="John Filler"
        description="Jibber Jabber"
        to="https://www.example.com"
        callToAction="Check out my site!"
        source={data.profile.childImageSharp.fixed}
      />
    </>
  )
}
