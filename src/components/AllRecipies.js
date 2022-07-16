import React from 'react'
import Featured from "./Featured"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from 'gatsby'
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipies = () => {
    const data = useStaticQuery(query);
  return (
    <div>
        <h1>AllRecipies</h1>
        <TagsList/>
        <Featured/>
        </div>
  )
}

export default AllRecipies