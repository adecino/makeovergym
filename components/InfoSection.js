import React from "react";
import InfoSectionImage from './InfoSectionImage';
import InfoSectionContainer from './InfoSectionContainer';

const InfoSection = () => {
    return (
        <div className = "infoSection">
            <InfoSectionImage />
            <InfoSectionContainer />
            <style jsx>{`
                .infoSection {
                    background-color: #404040;
                }
            `}</style>
        </div>
    );
}

export default InfoSection;