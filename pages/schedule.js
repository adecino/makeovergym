import React, {Component} from "react";
import Page from '../components/Page';
import ScheduleSection from '../components/ScheduleSection';

class schedulePage extends Component {
    render() {
        return (
            <Page>
                <h1>SCHEDULE</h1>
                <ScheduleSection/>
            </Page>
        );
    }
 }

export default schedulePage;
