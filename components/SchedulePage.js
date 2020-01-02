import React, {Component} from "react";
import ScheduleSection from './ScheduleSection';

class SchedulePage extends Component {
    render () {
        return (
            <div className = "signUpBar">
                <h1>SCHEDULE</h1>
                <ScheduleSection/>
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
            </div>
        );
    }
}

export default SchedulePage;