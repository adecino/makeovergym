import React, {Component} from "react";
import SignUpButton from './SignUpButton.js';

class BannerFold extends Component {
    render () {
        return (
            <div className = "bannerFold">
                <h1>Sign up for <br/> your first week <br/> FREE!</h1>
                <SignUpButton/>
                <style jsx> {`
                    .bannerFold {
                        background-image: url("http://drive.google.com/uc?export=view&id=1YMOEV8jj8nq7vdyGqHx56Pduxu-zLYEe");
                        height: 70vh;
                        background-size: cover;
                    }

                    .bannerFold h1 {
                        margin: 0;
                        color: white;
                        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                        font-size: 80px;
                        font-family: Lato;
                        font-weight: 900;
                        text-align: left;
                        padding-left: 100px;
                        padding-bottom: 0px;
                    }
                `}</style>
            </div>              
        );
    }
}

export default BannerFold;