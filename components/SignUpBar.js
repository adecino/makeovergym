import React from "react";

const SignUpBar = () => {
    return (
        <div className = "signUpBar">
            <h1>Click Here to Get a FREE One Week Trial!</h1>
            <style jsx>{`
                .signUpBar {
                    background-color: #e05275;
                    background-size: cover;
                }
                .signUpBar h1 {
                    color: white;
                    font-family: Helvetica;
                    font-size: 2.5vw;
                    font-weight: 900;
                    margin: 0;
                    padding: 10px 0 20px 0;
                    text-align: center;
                    vertical-align: middle;
                }
                @media screen and (max-width: 820px) {
                    .signUpBar h1 {
                        font-size: 7vw;
                        padding: 0 2vw 0 2vw;
                    }
                }
            `}</style>
        </div>
    );
}

export default SignUpBar;