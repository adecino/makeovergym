import React, {Component} from "react";
import Page from '../components/Page';
import InformationSection from '../components/InformationSection';

class membershipPage extends Component {
    render() {
        return (
            <Page>
                <h1 className="pageHeader">MEMBERSHIPS</h1>
                <InformationSection/>

                <style jsx>{`
                    .signUpBar {
                        background-size: cover;
                    }

                    .pageHeader {
                        background-color: #e05275;
                        color: white;
                        font-family: Helvetica;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        text-align: center;
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
