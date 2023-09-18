import { Component } from "react";
import "../CSS/header.css";
import { Link } from "react-router-dom";

class Header extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        return (
            <div className="navbar-container">
                <nav>
                    <a href="index.html">
                        <img src="./assets/logo.png" alt="InterPrep" />
                    </a>

                    <div>
                        <ul
                            id="navbar"
                            className={this.state.clicked ? "#navbar active" : "#navbar"}
                        >
                            <li>
                                <Link className="active" to="/" >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i
                            id="bar"
                            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                        ></i>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;