import React, { useState } from 'react'
import { Link} from "gatsby"
import logo from "../assets/images/logo.svg"
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav-header">
          <Link to ="/">
            <img src = { logo } alt ="favorite recipes"/>
          </Link> 
          <button className='nav-btn' onClick={() => setShow(!show)}>
            =
          </button>
        </div>
        <div className={show ? 'nav-links show-links' : "nav-links"}
        >
            <Link to="/gf-df-sf-recipes/" 
            className='nav-link' 
            activeClassName='active-link'
            onClick={() => setShow(false)}
            >
              Home
            </Link>
            <Link to="/gf-df-sf-recipes/about" 
            className='nav-link' 
            activeClassName='active-link' 
            onClick={() => setShow(false)}
            >
              About
            </Link>
            <Link to="/gf-df-sf-recipes/contact" 
            className='nav-link' 
            activeClassName='active-link' 
            onClick={() => setShow(false)}
            >
              Contact
            </Link>
            <Link to="/gf-df-sf-recipes/recipes/" 
            className='nav-link' 
            activeClassName='active-link' 
            onClick={() => setShow(false)}
            >
              Recipes
            </Link>
        </div> 
      </div>
    </nav>   
  )
}

export default Navbar