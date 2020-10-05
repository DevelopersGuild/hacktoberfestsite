import React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { Link, animateScroll as scroll } from "react-scroll"
import navBarStyles from "../styles/navigation-bar.module.css"
import Image from "../components/image"
import MediaQuery from "react-responsive"

import { graphql } from "gatsby"

export default class NavigationBar extends React.Component {
  constructor(props) {
    super()
    this.state = {
      width: 0,
      height: 0,
      anchorEl: null,
      setAnchorEl: null,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick(event) {
    this.state.ancherEl
      ? this.setState({ anchorEl: null })
      : this.setState({ anchorEl: event.currentTarget })
  }

  handleClose() {
    this.setState({ anchorEl: null })
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
      <div>
        <nav
          className={`${navBarStyles.navbar} navbar-expand-lg navbar-dark bg-primary`}
        >
          {this.state.width < 1000 ? (
            <div className={navBarStyles.drawer}>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                Open Menu
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <Link
                  to="#about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <MenuItem onClick={this.handleClose}>About</MenuItem>
                </Link>

                <Link
                  to="#schedule"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <MenuItem onClick={this.handleClose}>Schedule</MenuItem>
                </Link>

                <Link spy={true} smooth={true} duration={500} offset={-70}>
                  <MenuItem onClick={this.handleClose}>Speakers</MenuItem>
                </Link>

                <Link
                  to="#team"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <MenuItem onClick={this.handleClose}>Team</MenuItem>
                </Link>

                <Link
                  to="#faq"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <MenuItem onClick={this.handleClose}>FAQ</MenuItem>
                </Link>
              </Menu>
            </div>
          ) : null}
          <div className="collapse navbar-collapse navbar-right justify-content-end">
            <ul className={`nav navbar-nav navbar-right`}>
              <li className={navBarStyles.navItem}>
                <Link
                  activeClass={navBarStyles.activeScroll}
                  to="#about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  About
                </Link>
              </li>
              <li className={navBarStyles.navItem}>
                <Link
                  activeClass={navBarStyles.activeScroll}
                  to="#schedule"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Schedule
                </Link>
              </li>
              <li className={navBarStyles.navItem}>
                <Link
                  activeClass={navBarStyles.activeScroll}
                  to="#speakers"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Speakers
                </Link>
              </li>
              <li className={navBarStyles.navItem}>
                <Link
                  activeClass={navBarStyles.activeScroll}
                  to="#team"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Team
                </Link>
              </li>
              <li className={navBarStyles.navItem}>
                <Link
                  activeClass={navBarStyles.activeScroll}
                  to="#faq"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <MediaQuery minWidth={1000}>
          <div>
            <Link
              className={navBarStyles.banner}
              onClick={function (e) {
                window.open("https://mlh.io/", "__blank")
              }}
            >
              <Image
                className={navBarStyles.banner}
                alt="Logo"
                filename="mlhbanner.png"
              ></Image>
            </Link>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

// query static data through graphql I am fetching an optimized image here
export const query = graphql`
  {
    filler: file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fixed(width: 1500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
