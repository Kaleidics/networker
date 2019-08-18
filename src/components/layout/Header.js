import React from "react";
import AudioCard from "audiocard";
import Navbar from "../layout/Navbar";
import hero from "../../assets/hero.png";

export default class Header extends React.Component {

    render() {
        
        return (
            <header className="header">
                <div className="header__container">
                    {/* <h1 className="heading-primary u-margin-bottom-large">netwrkr</h1> */}
                    <img className="header__hero" src={hero} alt="netwrkr logo" />
                    <Navbar onClick={this.props.onClick} selectedView={this.props.selectedView} />
                </div>
                {/* <img className="header__hero" src={hero} alt="netwrkr logo" /> */}
            </header>
        );
    }
}
