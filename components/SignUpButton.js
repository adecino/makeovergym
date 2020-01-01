import React, {Component} from "react";

class SignUpButton extends Component {
    render () {
        return (
            <div className = "signUpButton">
                <a href="http://google.com" className="button1">SEE THE SCHEDULE</a>
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

                    @media all and (max-width:30em){
                        a.button1{
                        display:block;
                        margin:0.4em auto;
                        }
                    } 
                `}</style>
            </div>              
        );
    }
}

export default SignUpButton;