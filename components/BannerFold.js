import React from "react";
import SignUpButton from './SignUpButton.js';

const BannerFold = () => {
    return (
        <div className = "bannerFold">
            <h1>Sign up for <br/> your first week <br/> FREE!</h1>
            <SignUpButton/>
            <style jsx> {`
                .bannerFold {
                    background-image: url("https://makeovergymfitness.s3-us-west-1.amazonaws.com/index_main_image.jpg");
                    background-size: cover;
                    height: 70vh;
                    max-width: 100%;
                }
                .bannerFold h1 {
                    color: white;
                    font-family: Helvetica;
                    font-size: 5vw;
                    font-weight: 900;
                    margin: 0px;
                    padding: 0px 0px 0px 100px;
                    text-align: left;
                    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                }
                @media screen and (max-width: 820px) {
                    .bannerFold {
                        background-color: black;
                        background-image: url("https://makeovergymfitness.s3-us-west-1.amazonaws.com/index_secondary_image.jpeg");
                        text-align: left;
                    }
                    .bannerFold h1 {
                        font-size: 10vw;
                        padding: 10px 0px 0px 10px;
                        text-align: left;
                    }
                }
            `}</style>
        </div>
    );
}

export default BannerFold;
