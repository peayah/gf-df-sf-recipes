import React from 'react'
import Layout from '../../components/Layout'
import AllRecipes from '../../components/AllRecipes'

const index = () => {

  return (
    <Layout>
      <main className='page'>
      <h2>Recipes</h2>
      <AllRecipes/>
      </main>
    </Layout>
  )
}

export default index