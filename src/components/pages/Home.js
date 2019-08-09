import React from "react";
import Header from "../layout/Header";
import PodcastContainer from "../elements/PodcastContainer";
import HostingSites from "../elements/HostingSites";

import Parser from "rss-parser";

let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default class Home extends React.Component {

    render() {
        return (
            <div className="home">
                
            </div>
        );
    }
}
