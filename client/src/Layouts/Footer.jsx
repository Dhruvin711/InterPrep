import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
       <div className="footer ">
        <hr />
            <h4 className="text-center">All Rights Reserved &copy; InterPrep</h4>
            {/* <p className="text-center mt-3">
                <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
                <Link to="/policy">Privacy Policy</Link>
            </p> */}
        </div>
    </div>
  )
}

export default Footer