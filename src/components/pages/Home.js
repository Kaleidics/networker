import React from "react";
import Header from "../layout/Header";
import PodcastContainer from "../elements/PodcastContainer";
import HostingSites from "../elements/HostingSites";
import MainContainer from "../elements/MainContainer";

import Parser from "rss-parser";

let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentView: "1"
        };
    }

    setCurrentView(view) {
        this.setState({
            currentView: view
        });
        console.log("clicked", this.state.currentView);
    }

    render() {
        return (
            <div className="home">
                <Header onClick={this.setCurrentView}/>
                <MainContainer />
            </div>
        );
    }
}
