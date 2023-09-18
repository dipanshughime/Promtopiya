import Form from '@components/Form'
import Feed from '@components/feed'
import React from 'react'

function Home() {
  return (
   <section>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>
    <Feed/>
    <Form/>
   </section>
  )
}

export default Home