import React from 'react'
import { Link} from "gatsby"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/recipes/">Recipes</Link>
        </ul>


    </nav>   
  )
}

export default Navbar