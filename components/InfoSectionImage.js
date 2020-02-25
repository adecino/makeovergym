import React from "react";

const InfoSectionImage = () => {
    return (
        <div className = "infoSectionImage">
            <style jsx>{`
                .infoSectionImage {
                    background-image: url("http://drive.google.com/uc?export=view&id=1Y2H2DV__ISTvHG-pyIq9xWsUoQAJrWrE");
                    background-size: cover;
                    display: inline-block;
                    height: 100vh;
                    width: 50%;
                }
                @media screen and (max-width: 820px) {
                    .infoSectionImage {
                        background-color: black;
                        background-image: none;
                        display: none;
                    }
                }
            `}</style>
        </div>
            
    );
}

export default InfoSectionImage;