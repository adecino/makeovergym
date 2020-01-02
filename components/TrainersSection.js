import React, {Component} from "react";

class TrainersSection extends Component {
    render () {
        return (
            <div className = "trainersSection">
                <div className = "stacyImage">
                </div>
                <div className = "stacyInfo">
                    <p className = "shoutout"> Stacy Yip</p>
                    <p>I am a Michigan native, went to college in San Francisco, taught English in China, and then settled in Los Angeles to help take care of my 90 year old grandmother. She is my biggest motivation to stay healthy and strong. It hurt me to see that she was bedridden, and unable to enjoy the usual daily tasks that we take for granted. She keeps me passionate for my own health and to help others slow down the aging process. I have been a personal trainer for 5 years. After being certified with NASM (National Association of Science Medicine) and taking another certification course through WITS. I adhere to a science based training program tailored for the client to use their time and energy as efficiently as possible. Our health is made up of many different habits, I believe in making the process as dynamic and fun as possible. </p>
                </div>

                <style jsx>{`
                    .trainersSection {
                        font-family: Helvetica;                    
                    }

                    .trainersSection .shoutout {
                        font-weight: 900;
                        padding-left: 20px;
                        font-size: 30px;
                    }

                    .trainersSection p {
                        padding-left: 20px;
                    }

                    .trainersSection .stacyImage {
                        width: 50%;
                        background-image: url("http://drive.google.com/uc?export=view&id=12fpfNQpYoandpW_R_L5Mx2-8crHyGMow");
                        height: 100vh;
                        background-size: cover;
                        display: inline-block;
                    }

                    .trainersSection .stacyInfo {
                        width: 50%;
                        display: inline-block;
                        vertical-align: top;
                    }

                    @media screen and (max-width: 820px) {
                        .trainersSection .stacyImage {
                            display: none;
                        }

                        .trainersSection .stacyInfo {
                            width: 100%;
                        }

                     }

                `}</style>
            </div>
        );
    }
}

export default TrainersSection;