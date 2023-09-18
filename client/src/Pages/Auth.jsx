import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import "../CSS/auth.css"
import axios  from "axios";
import toast from "react-hot-toast";
import { useAuth } from '../Context/auth';

const Auth = (props) => {
    const [rightPanelActive, setRightPanelActive] = useState(props.isRegister);

    const navigate = useNavigate();
    const location = useLocation();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCpassword] = useState("");

    // const [auth,setAuth] = useAuth();

    // handling overlays button clicks
    const handleClick = () => {
        // signUp and signIn switch
        setRightPanelActive(!rightPanelActive);
        
        setName("");
        setEmail("");
        setPassword("");
        setCpassword("");
    }

    // Login submit handle funcs
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login/`, {
                email,
                password
            });
            // console.log(res);
            if(res && res.data.success){
                toast.success(res.data.message);

                // setAuth({
                //     ...auth,
                //     user: res.data.user,
                //     // token: res.data.token,
                // });
                // console.log(auth);

                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {
            if(cpassword === password){
                const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/register/`, {
                    first_name: name,
                    email,
                    password
                });
                console.log(res);
                if(res && res.data.success){
                    toast.success(res.data.message);

                    // setAuth({
                    //     ...auth,
                    //     user: res.data.user,
                    //     // token: res.data.token,
                    // });
    
                    navigate(location.state || "/");
                } else {
                    toast.error(res.data.message);
                }
            } else {
                toast.error("Confirm Password and password should Match");
            }    
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    }

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
                        <button type='submit' onClick={handleRegisterSubmit}>Sign Up</button>
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
                        <button type='submit' onClick={handleLoginSubmit}>Sign In</button>
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