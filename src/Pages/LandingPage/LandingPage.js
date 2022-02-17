import React from 'react'
import BannerSection from './BannerSection'
import FeatureProductSection from './FeatureProductSection'
import ShopByCategory from './ShopByCategory'

const LandingPage = () => {
    return (
        <div>

            <div className="container-fluid">
                <BannerSection />
            </div>

            <div className="sidebar">
            </div>

            <div className="container-fluid my-3">
                <ShopByCategory />
            </div>

            <div className="sidebar">
            </div>

            <div className="container-fluid my-3">
                <FeatureProductSection />
            </div>

        </div>
    )
}

export default LandingPage