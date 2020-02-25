import React from "react";
import Link from 'next/link';

const SignUpButton = () => {
    return (
        <div className = "signUpButton">
            <Link href="/schedule"><a className="button1"> SCHEDULE </a></Link>
            <style jsx>{`
                .signUpButton a.button1{
                    display:inline-block;
                    padding:20px 50px 20px 50px;
                    border:0.1em solid #FFFFFF;
                    margin:0 0.3em 0.3em 0;
                    border-radius:0.12em;
                    box-sizing: border-box;
                    text-decoration:none;
                    font-family:'Roboto',sans-serif;
                    font-weight:300;
                    color:#FFFFFF;
                    text-align:center;
                    transition: all 0.2s;
                    justify-content: center;
                    margin-left: 100px;
                    background-color: #e05275;
                    }

                .signUpButton a.button1:hover{
                    color:#e05275;
                    background-color:#FFFFFF;
                    border: #e05275;
                }

                @media screen and (max-width: 820px) {
                    .signUpButton a.button1{
                        margin-right: auto;
                        margin-left: 2vw;
                        width: 40vw;
                        height: 5vh;
                        font-size: 4vw;
                        padding-left: 1vw;
                        padding-right: 1vw;
                        padding-top: 1vh;
                        padding-bottom: 1vh;
                    }
                } 
            `}</style>
        </div>              
    );
}

export default SignUpButton;