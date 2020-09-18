import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'; import { Link, animateScroll as scroll } from "react-scroll"
import navBarStyles from "../styles/navigation-bar.module.css"
import Image from '../components/image'
import MediaQuery from 'react-responsive'
import Scrollspy from 'react-scrollspy'



export default function NavigationBar({ data }) {


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div>
      <nav className={`${navBarStyles.navbar} navbar-expand-lg navbar-dark bg-primary`}>
        <MediaQuery maxWidth={1000}>
          <div className={navBarStyles.drawer}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >

              <Link to="#about" spy={true} smooth={true} duration={500} offset={-70}>
                <MenuItem onClick={handleClose}>About</MenuItem>
              </Link>

              <Link to="#schedule" spy={true} smooth={true} duration={500} offset={-70}>
                <MenuItem onClick={handleClose}>Schedule</MenuItem>
              </Link>

              <Link spy={true} smooth={true} duration={500} offset={-70}>
                <MenuItem onClick={handleClose}>Speakers</MenuItem>
              </Link>

              <Link to="#team" spy={true} smooth={true} duration={500} offset={-70}>
                <MenuItem onClick={handleClose}>Team</MenuItem>
              </Link>

              <Link to="#faq" spy={true} smooth={true} duration={500} offset={-70}>
                <MenuItem onClick={handleClose}>FAQ</MenuItem>
              </Link>

            </Menu>
          </div>
        </MediaQuery>
        <div className="collapse navbar-collapse navbar-right justify-content-end">
          <ul className={`nav navbar-nav navbar-right`}>
            <li className={navBarStyles.navItem}>
              <Link activeClass={navBarStyles.activeScroll} to="#about" spy={true} smooth={true} duration={500} offset={-70}>
                About
            </Link>
            </li>
            <li className={navBarStyles.navItem}>
              <Link activeClass={navBarStyles.activeScroll} to="#schedule" spy={true} smooth={true} duration={500} offset={-70}>
                Schedule
            </Link>
            </li>
            <li className={navBarStyles.navItem}>
              <Link activeClass={navBarStyles.activeScroll} to="#speakers" spy={true} smooth={true} duration={500} offset={-70}>
                Speakers
            </Link>
            </li>
            <li className={navBarStyles.navItem}>
              <Link activeClass={navBarStyles.activeScroll} to="#team" spy={true} smooth={true} duration={500} offset={-70}>
                Team
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
      <MediaQuery minWidth={1000}>
        <div>
          <Link
            className={navBarStyles.banner}
            onClick={function (e) {
              window.open('https://mlh.io/', '__blank')
            }}>
            <Image
              className={navBarStyles.banner}
              alt="Logo"
              filename="mlhbanner.png">
            </Image>
          </Link >
        </div>
      </MediaQuery>
    </div >
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
