import React from 'react';
import Layout from '../components/Layout';
import { StaticImage} from "gatsby-plugin-image";
import {Link, graphql} from 'gatsby';
import RecipesList from "../components/RecipesList"

const About = ({data:{allContentfulRecipies:{nodes:recipes}}}) => {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I really don't like to cook</h2>
            <p>All the recipes I like have one thing in common; outside bring gluten, dairy and soy free; minimal amount of ingredients and short sessions in the kitchen.</p>
            <p>I guess, I should also warn you that I do not have a sweet tooth, so you'll have to add that yourself, if you feel so inclined.</p>
          </article>
          <StaticImage 
          src="../assets/images/about-image-by-klaus-nielsen.jpg" 
          alt="pasta sauce"
          placeholder="tracedSVG"
          className="about-img"
          // as = "article"
          />
        </section>
        <section className='featured-recipes'>
          <h5>These are my current favorite favorites</h5>
          <RecipesList recipes = {recipes}/>

        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipies(
      sort: {fields: title, order: ASC}
      filter: {description: {raw: {}}, id: {}, featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cooktime
        servings
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default About
