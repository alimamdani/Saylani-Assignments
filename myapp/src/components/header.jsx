import React from 'react';
// import ".App.js"
import './css/header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="mainheader">
                <div className="head">
                    <h1>Logo</h1>
                </div>
                <div className="head1">
                    <h1>Navigation Bar</h1>
                </div>
            </div>
        )
    }
    
}

export default Header;