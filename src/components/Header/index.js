import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="home-page-navbar">
    <div className="navbar-heading-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-image"
      />
      <p className="wave-text">Wave</p>
    </div>
    <ul className="navbar-links-container">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
