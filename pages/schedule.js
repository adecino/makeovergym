import React, {Component} from "react";
import Page from '../components/Page';
import ScheduleSection from '../components/ScheduleSection';

class schedulePage extends Component {
    render() {
        return (
            <Page>
                <h1 className="pageHeader">SCHEDULE</h1>
                <ScheduleSection/>

                <style jsx>{`

                    .pageHeader {
                        background-color: #e05275;
                        color: white;
                        font-family: Helvetica;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        text-align: center;
                    }

                `}</style>
            </Page>
        );
    }
 }

export default schedulePage;
