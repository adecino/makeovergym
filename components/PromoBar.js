import React from "react";

const PromoBar = () => {
    return (
        <div className = "promoBar">
            <h1> Empowering women through health and fitness </h1>
            <style jsx>{`
                .promoBar {
                    background-color: #e05275;
                    background-size: cover;
                    height: 15vh;
                }
                .promoBar h1 {
                    color: white;
                    font-family: Helvetica;
                    font-size: 2.5vw;
                    font-weight: 900;
                    margin:0;
                    padding-top: 3vh;
                    text-align: center;
                    vertical-align: middle;
                }
                @media screen and (max-width: 820px) {
                    .promoBar h1 {
                        font-size: 7vw;
                        padding: 3vh 2vw 0 2vw;
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    );
}

export default PromoBar;