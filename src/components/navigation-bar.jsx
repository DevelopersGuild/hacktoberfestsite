import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import navBarStyles from "../styles/navigation-bar.module.css"
import Image from '../components/image'


export default function NavigationBar({ data }) {

  return (
    <div>

      <nav className={`${navBarStyles.navbar} navbar-expand-lg navbar-dark bg-primary`}>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className={navBarStyles.navItem}>
              <Link activeClass={navBarStyles.active} to="#schedule" spy={true} smooth={true} duration={500} offset={-70}>
                SCHEDULE
            </Link>
            </li>
            <li className={navBarStyles.navItem}>
              <Link activeClass={navBarStyles.active} to="#speakers" spy={true} smooth={true} duration={500} offset={-70}>
                SPEAKERS
            </Link>
            </li>
            <li className={navBarStyles.navItem}>
              <Link activeClass={navBarStyles.active} to="#team" spy={true} smooth={true} duration={500} offset={-70}>
                TEAM
            </Link>
            </li>
            <li className={navBarStyles.navItem}>
              <Link activeClass={navBarStyles.active} to="#faq" spy={true} smooth={true} duration={500} offset={-70}>
                FAQ
            </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Link className={navBarStyles.logo}
        onClick={scroll.scrollToTop}>
        <Image
          className={navBarStyles.logo}
          alt="Logo"
          filename="mlhbanner.png">
        </Image>
      </Link>
    </div>
  )
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
