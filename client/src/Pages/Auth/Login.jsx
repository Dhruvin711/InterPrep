import React from 'react'
import Layout from '../../Layouts/Layout'

const Login = () => {
  return (
    <Layout>
        <form className="m-5 p-5 w-50">
            <h1> Login </h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </Layout>
  )
}

export default Login