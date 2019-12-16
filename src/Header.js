import React, {Component} from "react";
import "./Header.css";

class Header extends Component {
    render () {
        return (
            <div className="header">
                <h1 href="http://localhost:3001" target="_blank"> THE MAKEOVER GYM</h1>
                <div className="menu">
                    <p> Memberships </p>
                    <p> Schedule </p>
                    <p> Calendar </p>
                    <p> Trainers </p>
                </div>
            </div>
              
        );
    }
}

export default Header;