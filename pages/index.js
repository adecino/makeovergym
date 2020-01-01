import React, {Component} from "react";
import Header from '../components/Header';
import Page from '../components/Page';
import Footer from '../components/Footer';

class indexPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Page/>
                <Footer/>
                <style jsx>{`
                    body {
                        margin: 0;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }

                    code {
                        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
                    }
                `}</style>
            </div>
        );
    }
 }

export default indexPage;