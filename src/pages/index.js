import React from "react"
import Helmet from "react-helmet"
import clsx from "clsx"
import { StyleSheet, css } from "aphrodite"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import NavigationBar from "../components/navigation-bar"
import ScheduleTable from "../components/schedule-table"
import JSONData from "../data/homeData.json"
import SpeakersGrid from "../components/speakers-grid"
import TeamGrid from "../components/team-grid"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import Faq from "../components/faq"
import Image from "../components/image"
import landingPageStyles from "../styles/landingPage.module.css"

export default function Home() {
  return (
    <React.Fragment>
      <Helmet title="De Anza Hacks" defer={false} />
      <NavigationBar />
      <br />
      <ParallaxProvider>
        <div className={clsx("container", css(styles.fullHeightContainer))}>
          <Image
            alt="Hackathon Banner Image"
            className={landingPageStyles.backgroundImage}
            filename="background-top.jpg"
          />
        </div>
        <div className={landingPageStyles.content}>
          <p className="lead  mb-3 text-mono text-success">
            {JSONData.description}
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
        <div className={clsx("container", css(styles.fullHeightContainer))}>
          <Image
            alt="Hackathon Banner Image"
            className={landingPageStyles.backgroundImage}
            filename="background-bottom.jpg"
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
          <SpeakersGrid />
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
          <Parallax x={[20, -40]}>
            <TeamGrid />
          </Parallax>
        </div>
        {/* FAQ Section */}
        <div
          id="#faq"
          className={clsx("container", css(styles.fullHeightContainer))}
        >
          <h1 className="display-2">FAQ</h1>
          <p className="lead mb-3 text-mono text-success">
            Some commonly asked questions
          </p>
          <Faq />
        </div>
        <div style={{ marginBottom: "400px" }}></div>
      </ParallaxProvider>
    </React.Fragment>
  )
}

// apply custom styles through the aphrodite stylesheet
// https://github.com/Khan/aphrodite
const styles = StyleSheet.create({
  customStyle: {},
})
