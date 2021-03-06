import React from 'react';
import TagsList from "./TagsList";
import RecipesList from './RecipesList';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allContentfulRecipies {
      nodes {
        title
        id
        cooktime
        featured
        servings
        preptime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        content {
        tags
      }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipies.nodes;
  
  return (
    <section className="recipes-container">
      <TagsList recipes= {recipes}/>
      <RecipesList recipes={recipes}/>
    </section>
  )
}

export default AllRecipes