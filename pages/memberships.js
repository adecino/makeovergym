import React, {Component} from "react";
import Page from '../components/Page';
import InformationSection from '../components/InformationSection';

class membershipPage extends Component {
    render() {
        return (
            <Page>
                <h1>MEMBERSHIPS</h1>
                <InformationSection/>

                <style jsx>{`
                    .signUpBar {
                        background-size: cover;
                    }

                    .signUpBar h1 {
                        font-family: Helvetica;
                        font-weight: 900;
                        margin:0;
                        background-color: #e05275;
                        color: white;
                        font-size: 50px;
                        text-align: center;
                        padding-top: 10px;
                        padding-bottom: 20px;
                        vertical-align: middle;
                        font-size: 5vh;
                    }
                `}</style>
            </Page>
        );
    }
 }

export default membershipPage;
