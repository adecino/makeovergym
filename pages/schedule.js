import React from "react";
import Page from '../components/Page';
import ScheduleSection from '../components/ScheduleSection';

const schedulePage = () => {
    return (
        <Page>
            <h1 className="pageHeader">SCHEDULE</h1>
                <ScheduleSection/>
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

export default schedulePage;
