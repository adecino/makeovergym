import React, {Component} from "react";
import "./BannerFold.css";
import SignUpButton from './SignUpButton.js';

class BannerFold extends Component {
    render () {
        return (
            <div className = "bannerFold">
                <h1>Sign up for <br/> your first week <br/> FREE!</h1>
                <SignUpButton/>
            </div>              
        );
    }
}

export default BannerFold;