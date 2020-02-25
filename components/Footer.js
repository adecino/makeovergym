import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="address">
                <h3>Address:</h3>
                <p>2650 Mission St.</p>
                <p>San Marino, CA 91108</p>
            </div>
            <div className="contact">
                <h3>Phone Number:</h3>
                <p>123-212-1231</p>
                <h3>Email:</h3>
                <p>yipfitness@gmail.com</p>   
            </div>
            <div className="social">
                <h3>Instagram Icon</h3>
                <h3>Facebook Icon</h3>
            </div>
            <style jsx>{`
                .footer {
                    background-color: black;
                    font-family: Helvetica;
                    color: white;
                    text-align: center;
                }

                .footer p {
                    margin: 0px;
                }

                .footer h3 {
                    margin-top: 0px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    margin-bottom: 0px;
                }

                .social h3 {
                    display: inline-block;
                    padding-right: 50px;
                    padding-left: 50px;
                    text-align: middle;
                }
            `}</style>
        </div>  
    );
}

export default Footer;