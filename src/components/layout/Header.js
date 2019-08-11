import React from "react";
import AudioCard from "audiocard";
import Navbar from "../layout/Navbar";

export default class Header extends React.Component {

    render() {
        
        return (
            <header className="header">
                <h1 className="heading-primary u-margin-bottom-large">netwrkr</h1>
                <Navbar onClick={this.props.onClick} selectedView={this.props.selectedView} />
            </header>
        );
    }
}
