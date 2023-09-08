import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../CSS/header.css"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div 
                        className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent"
                    >
                        <Link className="navbar-brand" to="/">InterPrep</Link>
                        
                        <div className='w-50'>
                            {/* Search box */}
                            <form className="d-flex" role="search">
                                <input 
                                    className="form-control me-2" 
                                    type="search" 
                                    placeholder="Search" 
                                    aria-label="Search" 
                                />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>

                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link ">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link ">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link ">
                                        Register
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header