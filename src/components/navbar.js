import React from 'react'
import { Link} from "gatsby"
// import { FiAlignJustify } from "react-icons/fi"
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav-header">

        </div>
        <div className="nav-links show-links"></div> 
      </div>

          <li>
            <Link to="/">Home</Link>
            </li>npm start

            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/recipes/">Recipes</Link>
            </li>
        </ul>


    </nav>   
  )
}

export default Navbar