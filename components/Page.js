import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page = (props) => {
    return (
        <div className = "page">
            <Header />
                {props.children}
            <Footer />
            <style jsx>{`
                body {
                    margin: 0;
                }
            `}</style>
        </div>

    );
}

export default Page;
