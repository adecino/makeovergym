import React, {Component} from "react";
import BannerFold from './BannerFold';
import PromoBar from './PromoBar';
import InfoSection from './InfoSection';
import SignUpBar from './SignUpBar';

class Page extends Component {
    render () {
        return (
            <div className = "page">
                <BannerFold />
                <PromoBar />
                <InfoSection />
                <SignUpBar />
            </div>
              
        );
    }
}

export default Page;