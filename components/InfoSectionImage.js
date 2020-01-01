import React, {Component} from "react";

class InfoSectionImage extends Component {
    render () {
        return (
            <div className = "infoSectionImage">
                <style jsx>{`
                    .infoSectionImage {
                        /*background-color: #e05275;*/
                        display: inline-block;
                        width: 50%;
                        background-image: url("http://drive.google.com/uc?export=view&id=1Y2H2DV__ISTvHG-pyIq9xWsUoQAJrWrE");
                        height: 100vh;
                        background-size: cover;
                    }

                    @media screen and (max-width: 820px) {
                        .infoSectionImage {
                            background-image: none;
                            background-color: black;
                            display: none;
                        }
                    }
                `}</style>
            </div>
              
        );
    }
}

export default InfoSectionImage;