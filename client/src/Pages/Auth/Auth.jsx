import React from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='container'>
        <div className='sign-up'>
            <form action='#'>
                <h1>Create Account</h1>
                <div className='social-container'>
                    <Link to='/' className='social'><i className='fab fa-facebook-f'></i></Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Auth