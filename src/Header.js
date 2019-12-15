import React, {Component} from "react";
import "./Header.css";

class Header extends Component {
    render () {
        return (
            <div className="header">
                <h1> THE MAKEOVER GYM</h1>
                <div className="menu">
                    <p> Schedule </p>
                    <p> About </p>
                    <p> First Timers </p>
                    <p> Trainers </p>
                </div>
            </div>
              
        );
    }
}

export default Header;