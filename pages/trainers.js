import React from "react";
import Page from '../components/Page';
import TrainersSection from '../components/TrainersSection';

const trainersPage = () => {
    return (
        <Page>
            <h1 className="pageHeader">OWNERS</h1>
                <TrainersSection/>
            <style jsx>{`
                .pageHeader {
                    background-color: #e05275;
                    color: white;
                    font-family: Helvetica;
                    margin: 0px;
                    text-align: center;
                }
                .trainersBar {
                    background-size: cover;
                }
                .trainersBar h1 {
                    background-color: #e05275;
                    color: white;
                    font-family: Helvetica;
                    font-size: 50px;
                    font-weight: 900;
                    margin: 0;
                    padding: 10px 0 20px 0;
                    text-align: center;
                    vertical-align: middle;
                }
            `}</style>
        </Page>
    );
 }

export default trainersPage;
