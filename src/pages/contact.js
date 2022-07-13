import React from 'react'
import Layout from "../components/Layout"

const Contact = () => {
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
          <form action = "" className = "form contact-form">
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
              <textare name = "message" id = "message" cols = "30" rows = "10"/>
            </div>
            <button type = "submit" className='btn block'>Submit</button>
          </form>
        </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
