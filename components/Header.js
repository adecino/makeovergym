import React, {Component} from "react";
import Link from 'next/link';

class Header extends Component {
    render () {
        return (
            <div className="header">
                <Link href="/"><h1> MAKEOVER FITNESS</h1></Link>
                <div className="menu">
                    <Link href="/memberships"><a> Memberships </a></Link>
                    <Link href="/schedule"><a> Schedule </a></Link>
                    <Link href="/calendar"><a> Calendar </a></Link>
                    <Link href="/trainers"><a> Trainers </a></Link>
                </div>
                <style jsx>{`
                    .header {
                        background-color: #404040;
                        padding-top: 10px;
                        padding-bottom: 15px;
                        text-align: center;
                        font-family: Helvetica;
                        color: white;
                        position: sticky;
                        top: 0;
                    }
                    .header h1 {
                        font-weight: 900;
                        margin-top: 0;
                        margin-bottom: 0;
                        font-size: 100px;
                        display: inline-block;
                    }

                    .header .menu {
                        font-weight: 900;   
                        display: inline-block;
                        padding-left: 200px;
                        text-align: left
                    }

                    .header .menu a {
                        color: white;
                        text-decoration: none;
                        display: inline-block;
                        width: 200px;
                        margin-top: 5px;
                        margin-bottom: 0px;
                    }

                    .header .menu a:hover {
                        text-decoration: underline;
                    }

                    @media screen and (max-width: 820px) {
                        .header h1 {
                            font-size: 8vw;
                            text-align: center;
                        }

                        .header .menu {
                            padding-left: 10px;
                            display: flex;
                            text-align: center;
                        }

                        .header .menu a {
                            font-size: 3vw;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Header;