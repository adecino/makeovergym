import React, {Component} from "react";
import Page from '../components/Page';
import TrainersSection from '../components/TrainersSection';

class trainersPage extends Component {
    render() {
        return (
            <Page>
                <h1 className="pageHeader">OWNERS</h1>
                <TrainersSection/>

                <style jsx>{`
                    .trainersBar {
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

                    .trainersBar h1 {
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

export default trainersPage;
