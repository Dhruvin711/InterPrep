import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../CSS/auth.css"

const Auth = () => {
    const [rightPanelActive, setRightPanelActive] = useState(false);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCpassword] = useState("");

    // handling overlays button clicks
    const handleClick = () => {
        // console.log(rightPanelActive);
        setRightPanelActive(!rightPanelActive);
        setName("");
        setEmail("");
        setPassword("");
        setCpassword("");
    }

    // // form submit handle funcs
    // const handleLoginSubmit = (e) => {
    //     return 1;
    // }

    // const handleLoginSubmit = (e) => {

    // }

    return (
        <div className='auth'>
            <div className={rightPanelActive ? `auth-container right-panel-active` : `auth-container`} id="auth-container">
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <Link to='/' className="social"><i className="fab fa-facebook-f" /></Link>
                            <Link to='/' className="social"><i className="fab fa-google-plus-g" /></Link>
                            <Link to='/' className="social"><i className="fab fa-linkedin-in" /></Link>
                        </div>
                        <span>or use your email for registration</span>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name="name" 
                            onChange={(e) => setName(e.target.value)} 
                            value={name} 
                            />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                        />
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            name="cpassword" 
                            onChange={(e) => setCpassword(e.target.value)} 
                            value={cpassword} 
                        />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <Link to='/' className="social"><i className="fab fa-facebook-f" /></Link>
                            <Link to='/' className="social"><i className="fab fa-google-plus-g" /></Link>
                            <Link to='/' className="social"><i className="fab fa-linkedin-in" /></Link>
                        </div>
                        <span>or use your account</span>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                        />
                        <Link to='/'>Forgot your password?</Link>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
                
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Auth