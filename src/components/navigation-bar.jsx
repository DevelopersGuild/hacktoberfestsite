import React from "react"
import { Link } from "gatsby"

export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        De Anza Hacks
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
          <li className="nav-item">
            <Link className="nav-link" to="#schedule">
              Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#speakers">
              Speakers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#team">
              Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
