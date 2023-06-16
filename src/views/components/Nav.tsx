import { Link } from "react-router-dom";
import LiquidmoniLogo from "../../../public/images/header/Liquid-moni.png";
import HamburgerMenu from "../../../public/images/icon-hamburger.svg";

export const DecideNavBarComponent = (): JSX.Element => {
  const handleScreenChange = () => {
    window.innerWidth <= 768 ? <MobileNav /> : <NavBar />
  }

  return (
    <>
      {
        window.onchange = (e) => {
          console.log(e.target)
        }
      }
    </>
  ) 
}

export default function NavBar() {
  return (
    <nav className="nav">
      <li className="nav__item">
        <Link to='/' className="nav__link"><img src={LiquidmoniLogo} alt="liquidmoni logo" /></Link>
      </li>

      <ul className="nav__list">
        
        <li className="nav__item">
          <Link to='/signup' className="nav__link">Send Money</Link>
        </li>
        
        <li className="nav__item">
          <Link to='/about' className="nav__link">About</Link>
        </li>
        
        <li className="nav__item">
          <Link to='/contact' className="nav__link">Contact</Link>
        </li>
        
        <li className="nav__item">
          <Link to='/faq' className="nav__link">Faq</Link>
        </li>

        <li className="nav__item">
          <Link to='/support' className="nav__link">Support</Link>
        </li>
      </ul>
      
      {/* pass a context for button to spread around the whole page */}
      <button className="nav__button"><Link to='/signup' className="nav__button--link">Download Soon</Link></button>
    </nav>
  )
}

export const MobileNav = ():JSX.Element => {
  const getScreenWidth = (): number => {
    let screenWidth = {};

    if (window.innerWidth < 768) {
       screenWidth.size = "mobile"
       screenWidth.value = window.innerWidth
    }
    else if (window.innerWidth < 1240) {
      screenWidth.size = "tablet"
      screenWidth.value = window.innerWidth
    }
    else {
      screenWidth.size = "desktop"
      screenWidth.value = window.innerWidth
    }
    console.log(screenWidth.size)
    return screenWidth.value;
  } 

  return (
    <div className="mobile-nav-bar">
      <label htmlFor="nav-toggle" className="nav-toggle">
        <img src={HamburgerMenu} className="nav-menu-icon" alt="nav menu icon" />
        <input type="checkbox" className="nav-bar-toggle" id="nav-toggle" />
      </label>
      <h1>Mobile</h1>
    </div>
  )
}
