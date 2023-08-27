import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='min-h-screen grid place-content-center gap-2 px-10'>
      <div className='text-5xl font-extrabold text-purple text-center'>404 ERROR</div>
      <div>
        <img 
          src='https://cdn.filestackcontent.com/2FGr6fMaRq6Wcglwnx7m'
          alt='404 error car'
        />
      </div>
      <div className='text-lg font-medium text-center'>Looks Like You May Have Made a Mistake</div>
      <Link to="/" className='button-filled mx-auto' >Homepage</Link>
    </div>
  )
}

export default ErrorPage