import React, {Component} from "react";
import "./Page.css";
import BannerFold from './BannerFold';
import PromoBar from './PromoBar';
import InfoSection from './InfoSection';
import CarouselBanner from './CarouselBanner';
import BottomSection from './BottomSection';

class Page extends Component {
    render () {
        return (
            <div className = "page">
                <BannerFold />
                <PromoBar />
                <InfoSection />
                <PromoBar />
                <CarouselBanner />
                <PromoBar />
                <BottomSection />

            </div>
              
        );
    }
}

export default Page;