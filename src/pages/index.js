import React from "react"
import Helmet from "react-helmet"
import clsx from "clsx"
import { StyleSheet, css } from "aphrodite"
import NavigationBar from "../components/navigation-bar"
import ScheduleTable from "../components/schedule-table"
import JSONData from "../data/homeData.json"
import SpeakersGrid from "../components/speakers-grid"
import TeamGrid from "../components/team-grid"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import Faq from "../components/faq"
import Image from "../components/image"
import AboutUs from "../components/about-us"
import landingPageStyles from "../styles/landingPage.module.css"
import Sponsors from "../components/sponsors"
import Typing from "react-typing-animation"
import Cursor from "react-typing-animation"

import ExpandLessIcon from "@material-ui/icons/ExpandLess"

export default class Home extends React.Component {
  constructor(props) {
    super()
    if (typeof window !== `undefined`) {
      this.state = {
        windowPosition: window.pageYOffset,
      }
    } else {
      this.state = {
        windowPosition: 0,
      }
    }
  }

  handleScroll() {
    if (typeof window !== `undefined`) {
      this.setState({ windowPosition: window.pageYOffset })
    }
    console.log(this.state.windowPosition)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this))
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title="De Anza Hacks" defer={false} />
        <NavigationBar />
        <br />
        <ParallaxProvider>
          <div className={clsx("container", css(styles.fullHeightContainer))}>
            <Image alt="Hackathon Banner Image" filename="background-top.jpg" />
          </div>
          <div className={landingPageStyles.content}>
            <Typing
              className={`lead  mb-3 text-mono text-primary ${landingPageStyles.description}`}
              speed={30}
              hideCursor={false}
            >
              {JSONData.description}
            </Typing>
            <hr className="my-4" />
            <p className={landingPageStyles.buttonDescription}>
              Register for the event through the MLH portal
            </p>
            <div className="text-mono">
              <a
                href="https://www.putthemlhregistrationformhere.com"
                target="__blank"
                rel="noreferrer"
                className={`btn btn-primary px-5 my-2 ml-0 text-left js-ht-download-link ${landingPageStyles.mainButton}`}
              >
                Register Today
              </a>
            </div>
          </div>
          <div className={clsx("container", css(styles.fullHeightContainer))}>
            <Image
              alt="Hackathon Banner Image"
              filename="background-bottom.jpg"
            />
          </div>
          {/* About The Event*/}
          <div
            id="#about"
            className={clsx("container", css(styles.fullHeightContainer))}
          >
            <h1 className="display-2">About the Event</h1>
            <p className="lead mb-3 text-mono text-primary">
              Learn More About The Event
            </p>
            <AboutUs />
          </div>
          {/* Schedule Section we use the ID field for navigation */}
          <div
            id="#schedule"
            className={clsx("container", css(styles.fullHeightContainer))}
          >
            <h1 className="display-2">Schedule</h1>
            <p className="lead mb-3 text-mono text-primary">
              Learn About The Event Schedule
            </p>
            <div className={landingPageStyles.scheduleContainer}>
              <ScheduleTable />
            </div>
          </div>
          {/* Speakers Section */}
          <div
            id="#speakers"
            className={clsx("container", css(styles.fullHeightContainer))}
          >
            <h1 className="display-2">Speakers</h1>
            <p className="lead mb-3 text-mono text-primary">
              Learn About The Event Speakers
            </p>
            <div className={landingPageStyles.speakerContainer}>
              <SpeakersGrid />
            </div>
          </div>
          {/* Team Section */}
          <div
            id="#team"
            className={clsx("container", css(styles.fullHeightContainer))}
          >
            <h1 className="display-2">Team</h1>
            <p className="lead mb-3 text-mono text-primary">
              Learn About The Event Team
            </p>
            <Parallax x={[10, -10]}>
              <TeamGrid />
            </Parallax>
          </div>
          {/* FAQ Section */}
          <div
            id="#faq"
            className={clsx("container", css(styles.fullHeightContainer))}
          >
            <h1 className="display-2">FAQ</h1>
            <p className="lead mb-3 text-mono text-primary">
              Some commonly asked questions
            </p>
            <Faq />
          </div>
          {/* Sponsors Section */}
          <div
            id="#sponsors"
            className={clsx("container", css(styles.fullHeightContainer))}
          >
            <h1 className="display-2">Sponsors</h1>
            <p className="lead mb-3 text-mono text-primary">
              The Organizations That Make This Event Possible
            </p>
            <Sponsors />
          </div>
          {this.state.windowPosition > 800 && (
            <span
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className={`btn btn-primary js-ht-download-link ${landingPageStyles.backTopButton}`}
            >
              <ExpandLessIcon
                style={{ width: "50px", height: "50px", margin: "auto auto" }}
              />
            </span>
          )}
          <div style={{ marginBottom: "400px" }}></div>
        </ParallaxProvider>
      </React.Fragment>
    )
  }
}

// apply custom styles through the aphrodite stylesheet
// https://github.com/Khan/aphrodite
const styles = StyleSheet.create({
  customStyle: {},
})
