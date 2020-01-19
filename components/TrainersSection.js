import React, {Component} from "react";

class TrainersSection extends Component {
    render () {
        return (
            <div className = "trainersSection">
                <div className = "marleneImage">
                </div>
                <div className = "marleneInfo">
                    <p className = "shoutout"> Marlene De La Torre</p>
                    <p>Marlene was born and raised in California, but has lived in several other states like Oregon, Washington and Colorado. She worked for 10 years in Colorado’s Douglas county school district for their elementary school special education department. For the past 20 years, fitness and good nutrition has been an important part of her life. She attended and graduated from the American Fitness and Nutrition Academy personal trainer program. She enjoys encouraging others to educate themselves about living a healthy lifestyle through diet and exercise. She has two children, and currently she lives in San Gabriel with her husband.</p>
                </div>

                <div className = "stacyImage">
                </div>
                <div className = "stacyInfo">
                    <p className = "shoutout"> Stacy Yip</p>
                    <p>Stacy is a Michigan native, went to college in San Francisco, taught English in China, and then settled in Los Angeles to help take care of her 90 year old grandmother. Her grandma is her biggest motivation to stay healthy and strong. It hurt Stacy to see that she was bedridden, and unable to enjoy the usual daily tasks that we take for granted. She keeps Stacy passionate for my own health and to help others slow down the aging process. Stacy has been a personal trainer for 5 years. After being certified with NASM (National Association of Science Medicine) and taking another certification course through WITS. Stacy adheres to a science based training program tailored for the client to use their time and energy as efficiently as possible. Our health is made up of many different habits, Stacy believes in making the process as dynamic and fun as possible. </p>
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

                    .trainersSection .marleneImage {
                        width: 50%;
                        background-image: url("http://drive.google.com/uc?export=view&id=1oK4v5zNiHBdjFguUrH_x8zQytQBqkVUh");
                        height: 100vh;
                        background-size: cover;
                        display: inline-block;
                    }

                    .trainersSection .stacyInfo {
                        width: 50%;
                        display: inline-block;
                        vertical-align: top;
                    }

                    .trainersSection .marleneInfo {
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

                     @media screen and (max-width: 820px) {
                        .trainersSection .marleneImage {
                            display: none;
                        }

                        .trainersSection .marleneInfo {
                            width: 100%;
                        }

                     }

                `}</style>
            </div>
        );
    }
}

export default TrainersSection;