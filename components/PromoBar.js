import React, {Component} from "react";

class PromoBar extends Component {
    render () {
        return (
            <div className = "promoBar">
                <h1> Empowering women through health and fitness </h1>
                <style jsx>{`
                    .promoBar {
                        height: 15vh;
                        background-size: cover;
                        background-color: #e05275;
                        font-family: Helvetica;
                        font-weight: 900;
                    }

                    .promoBar h1 {
                        margin:0;
                        color: white;
                        text-align: center;
                        padding-top: 3vh;
                        vertical-align: middle;
                        font-size: 2.5vw;
                    }

                    @media screen and (max-width: 820px) {
                        .promoBar h1 {
                            font-size: 7vw;
                            padding-left: 2vw;
                            padding-right: 2vw;
                            padding-top: 3vh;
                            text-align: center;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default PromoBar;