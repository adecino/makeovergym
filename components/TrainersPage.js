import React, {Component} from "react";
import TrainersSection from './TrainersSection';

class TrainersPage extends Component {
    render () {
        return (
            <div className = "trainersBar">
                <h1>TRAINERS</h1>
                <TrainersSection/>
                <style jsx>{`
                    .trainersBar {
                        background-size: cover;
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
            </div>
        );
    }
}

export default TrainersPage;