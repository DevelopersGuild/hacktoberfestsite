import React from "react"
import Img from "gatsby-image"

export default function BioCard({
  title,
  description,
  to,
  callToAction,
  source,
}) {
  return (
    <div className="card">
      <Img alt="Card image top" className="card-img-top" fixed={source} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <a
          href={to}
          target="__blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          {callToAction}
        </a>
      </div>
    </div>
  )
}
