import React, {Component} from "react";

class PromoBar extends Component {
    render () {
        return (
            <div className = "promoBar">
                <h1> Empowering women through <br/> health and fitness </h1>
                <style jsx>{`
                    .promoBar {
                        height: 15vh;
                        background-size: cover;
                        background-color: #e05275;
                        font-family: Lato;
                        font-weight: 900;
                    }

                    .promoBar h1 {
                        margin:0;
                        color: white;
                        font-size: 50px;
                        text-align: center;
                        padding-top: 10px;
                        vertical-align: middle;
                        font-size: 5vh;
                    }
                `}</style>
            </div>
        );
    }
}

export default PromoBar;