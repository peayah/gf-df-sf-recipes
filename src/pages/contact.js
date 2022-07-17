import React from 'react'
import Layout from "../components/Layout"
import {graphql} from 'gatsby';
import RecipesList from "../components/RecipesList"

const Contact = ({data:{allContentfulRecipies:{nodes:recipes}}}) => {
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
        <article className='contact-info'>
          <h2>Got a question?</h2>
            <p>some text</p>
            <p>some text</p>
            <p>some text</p>
        </article>
        <article>
          <form action="https://formspree.io/f/xnqwenqg" method="POST" className = "form contact-form">
            <div className = "form-row">
              <label htmlFor = "name">Name</label>
              <input type = "text" name = "name" id = "name"/>
            </div>

            <div className = "form-row">
              <label htmlFor = "email">Email</label>
              <input type = "text" email = "email" id = "email"/>
            </div>
            
            <div className = "form-row">
              <label htmlFor = "message">Message</label>
              <textarea name = "message" id = "message" cols = "30" rows = "10"/>
            </div>
            <button type = "submit" className='btn block'>Submit</button>
          </form>
        </article>
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
export default Contact
