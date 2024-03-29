import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Note: You can change "images" to whatever you'd like.

/**
 * Grabs and renders an image file with Gatsby Image
 *
 * Props:
 * - filename: path to image file relative to /src/components/images
 */
const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 3080, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return (
        <Img
          draggable={false}
          loading="eager"
          className={props.className}
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
        />
      )
    }}
  />
)

export default Image
