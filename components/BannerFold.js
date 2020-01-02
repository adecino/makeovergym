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
                        max-width: 100%;
                        height: 70vh;
                        background-size: cover;
                    }

                    .bannerFold h1 {
                        margin: 0;
                        color: white;
                        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                        font-size: 5vw;
                        font-family: Helvetica;
                        font-weight: 900;
                        text-align: left;
                        padding-left: 100px;
                        padding-bottom: 0px;
                    }

                    @media screen and (max-width: 820px) {
                        .bannerFold {
                            background-image: url("http://drive.google.com/uc?export=view&id=1u7oNggH9pIYbEFbLhIc_N502bjDyWF83");
                            background-color: black;
                            text-align: left;
                        }

                        .bannerFold h1 {
                            font-size: 10vw;
                            padding-left: 10px;
                            padding-top: 10px;
                            text-align: left;
                        }
                    }
                `}</style>
            </div>              
        );
    }
}

export default BannerFold;