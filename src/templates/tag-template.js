import React from 'react';
import {graphql} from "gatsby";
import RecipesList from "../components/RecipesList";
import Layout  from '../components/Layout';

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipies.nodes
  return (
    <Layout>
      <main className='page'>
        <h2>{pageContext.tag}</h2>
        <div className='tag-recipes'>
          <RecipesList recipes={recipes}/>
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
query GetRecipesByTag($tag:String) {
  allContentfulRecipies(
    sort: {fields: title, order: ASC}
    filter: {content: {tags: {eq: $tag}}}
  ) {
    nodes {
      title
      id
      cooktime
      preptime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
}
`

export default TagTemplate