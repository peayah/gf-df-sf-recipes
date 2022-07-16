import React from 'react'
import Layout from '../../components/Layout'
import AllRecipies from '../../components/allRecipies'

const index = () => {

  return (
    <Layout>
      <main className='page'>
      <h2>Recipes</h2>
      <AllRecipies/>
      </main>
    </Layout>
  )
}

export default index