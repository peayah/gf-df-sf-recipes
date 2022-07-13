import React from 'react'
import { Link} from "gatsby"
import logo from "../assets/images/logo.svg"
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav-header">
          <Link to ="/">
            <img src = { logo } alt ="favorite recipes"></img>
          </Link>
          <button className='nav-btn'>
            =
          </button>
        </div>
        <div className="nav-links show-links">
          <li>
            <Link to="/" className='nav-link ' activeClassName='active-link'>Home</Link>
            </li>

            <li>
            <Link to="/about" className='nav-link ' activeClassName='active-link'>About</Link>
            </li>
            <li>
            <Link to="/contact" className='nav-link ' activeClassName='active-link'>Contact</Link>
            </li>
            <li>
            <Link to="/recipes/" className='nav-link ' activeClassName='active-link'>Recipes</Link>
            </li></div> 
      </div>

          
        


    </nav>   
  )
}

export default Navbar