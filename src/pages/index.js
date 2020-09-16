import React from "react"
import Helmet from "react-helmet"
import clsx from "clsx"
// import { StyleSheet, css } from "aphrodite"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import NavigationBar from "../components/navigation-bar"
import ScheduleTable from "../components/schedule-table"
import Team from "../components/team"

export default function Home({ data }) {
  return (
    <React.Fragment>
      <Helmet title="De Anza Hacks" defer={false} />
      <NavigationBar />
      <br />
      <div className={clsx("container", css(styles.fullHeightContainer))}>
        <div className="jumbotron">
          <h1 className="display-1">De Anza Hacks</h1>
          <p className="lead  mb-3 text-mono text-success">
            A Fun Way to Kick Off Fall and Contribute to Open Source Projects On
            Campus and in the Community
          </p>
          <hr className="my-4" />
          <p>Register for the event through the MLH portal</p>
          <div className="text-mono">
            <a
              href="https://www.putthemlhregistrationformhere.com"
              target="__blank"
              rel="noreferrer"
              className="btn btn-primary px-3 my-2 ml-0 text-left js-ht-download-link"
            >
              Register Today
            </a>
          </div>
        </div>

        <Img
          alt="Hackathon Banner Image"
          className="img-fluid"
          fixed={data.filler.childImageSharp.fixed}
        />
      </div>

      {/* Schedule Section we use the ID field for navigation */}
      <div
        id="#schedule"
        className={clsx("container", css(styles.fullHeightContainer))}
      >
        <h1 className="display-2">Schedule</h1>
        <p className="lead mb-3 text-mono text-success">
          Learn About The Event Schedule
        </p>
        <ScheduleTable />
      </div>
      {/* Speakers Section */}
      <div
        id="#speakers"
        className={clsx("container", css(styles.fullHeightContainer))}
      >
        <h1 className="display-2">Speakers</h1>
        <p className="lead mb-3 text-mono text-success">
          Learn About The Event Speakers
        </p>
      </div>
      {/* Team Section */}
      <div
        id="#team"
        className={clsx("container", css(styles.fullHeightContainer))}
      >
        <h1 className="display-2">Team</h1>
        <p className="lead mb-3 text-mono text-success">
          Learn About The Event Team
        </p>
        <Team />
      </div>
    </React.Fragment>
  )
}

// apply custom styles through the aphrodite stylesheet
// const styles = StyleSheet.create({
//   customStyle: {
// height: "100vh",
//   },
// })

// query static data through graphql I am fetching an optimized image here
export const query = graphql`
  {
    filler: file(relativePath: { eq: "filler.jpg" }) {
      childImageSharp {
        fixed(width: 1500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
