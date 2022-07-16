import React from 'react';
import TagsList from "./TagsList";
import RecipesList from './RecipesList';
import { graphql, useStaticQuery } from 'gatsby';
const query = graphql`
  {
    allContentfulRecipies {
      nodes {
        id
        title
        cooktime
        preptime
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query);
  console.log(data)
  return (
    <div>
      <h1>All Recipes</h1>
      <RecipesList/>
      <TagsList/>
    </div>
  )
}

export default AllRecipes