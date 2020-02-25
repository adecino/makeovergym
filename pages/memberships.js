import React from "react";
import Page from '../components/Page';
import InformationSection from '../components/InformationSection';

const membershipPage = () => {
    return (
        <Page>
            <h1 className="pageHeader">MEMBERSHIPS</h1>
                <InformationSection/>
            <style jsx>{`
                .pageHeader {
                    background-color: #e05275;
                    color: white;
                    font-family: Helvetica;
                    margin: 0px;
                    text-align: center;
                }
            `}</style>
        </Page>
    );
 }

export default membershipPage;
