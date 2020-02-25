import React from "react";
import Page from '../components/Page';
import BannerFold from '../components/BannerFold';
import PromoBar from '../components/PromoBar';
import InfoSection from '../components/InfoSection';
import SignUpBar from '../components/SignUpBar';

const indexPage = () => {
    return (
        <Page>
            <BannerFold />
            <PromoBar />
            <InfoSection />
            <SignUpBar />
        </Page>
    );
 }

export default indexPage;
