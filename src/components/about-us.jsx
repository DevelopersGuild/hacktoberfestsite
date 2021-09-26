import React from "react"
import aboutUsStyles from "../styles/about-us.module.css"
import Image from "../components/image"

import { graphql, StaticQuery } from "gatsby"

export default class AboutUs extends React.Component {
  constructor(props) {
    super()
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query AboutUsSectionData {
            allDataJson {
              nodes {
                about_us_main
                about_us_off_1
                about_us_off_2
                about_us_off_3
                about_us_off_4
                about_us_off_5
                about_us_off_6
              }
            }
          }
        `}
        render={data => (
          <div className={aboutUsStyles.infoRow}>
            <div>
              <div
                className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.topLeft}`}
              >
                {data.allDataJson.nodes[1].about_us_off_1}
              </div>
              <div
                className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.midLeft}`}
              >
                {data.allDataJson.nodes[1].about_us_off_2}
              </div>
              <div
                className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.bottomLeft}`}
              >
                {data.allDataJson.nodes[1].about_us_off_3}
              </div>
            </div>
            <div
              style={{
                width: (this.state.width * 0.7).toString() + "px",
                height: (this.state.width * 0.7).toString() + "px",
                minHeight: "335px",
                minWidth: "335px",
                maxWidth: "450px",
                maxHeight: "450px",
              }}
              className={aboutUsStyles.mainInfo}
            >
              {data.allDataJson.nodes[1].about_us_main}
            </div>
            <div>
              <div
                className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.topRight}`}
              >
                {data.allDataJson.nodes[1].about_us_off_4}
              </div>
              <div
                className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.midRight}`}
              >
                {data.allDataJson.nodes[1].about_us_off_5}
              </div>
              <div
                className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.bottomRight}`}
              >
                {data.allDataJson.nodes[1].about_us_off_6}
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}
