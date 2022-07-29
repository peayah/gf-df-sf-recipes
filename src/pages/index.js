import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"


export default function Home() {
  return (
    <Layout>
      <main className='page'>
        <header className="hero">
          <StaticImage 
          src="../assets/images/main.jpg"
          placeholder="blurred"
          alt="food ingredients"
          className="hero-img"
          layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>This is so easy</h1>
              <h4>... and so good!</h4>
            </div>
          </div>
        </header>
        <AllRecipes/>
      </main>
    </Layout>
  )
}
