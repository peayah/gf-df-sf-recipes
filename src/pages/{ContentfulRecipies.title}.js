import React from "react";
import { graphql } from "gatsby";
 
const RecipeTemplate = props => {
  return (
    <div className="page">
        <h2>{props.params.title}</h2>
        </div>
  )
}

export const query = graphql`
  {
    contentfulRecipies(title: {eq: $title}) {
      title
      content {
        tools
        ingredients
        tags
        instructions
      }
      cooktime
      preptime
      servings
      description
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR )
      }
    }
  }
`

export default RecipeTemplate