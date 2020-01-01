import React, {Component} from "react";

class SignUpBar extends Component {
    render () {
        return (
            <div className = "signUpBar">
                <h1>Click Here to Get a FREE One Week Trial!</h1>
                <style jsx>{`
                    .signUpBar {
                        background-size: cover;
                        background-color: #e05275;
                    }

                    .signUpBar h1 {
                        font-family: Lato;
                        font-weight: 900;
                        margin:0;
                        color: white;
                        font-size: 2.5vw;
                        text-align: center;
                        padding-top: 10px;
                        padding-bottom: 20px;   
                        vertical-align: middle;
                        font-size: 5vh;
                    }

                    @media screen and (max-width: 820px) {
                        .signUpBar h1 {
                            font-size: 7vw;
                            padding-left: 2vw;
                            padding-right: 2vw;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default SignUpBar;