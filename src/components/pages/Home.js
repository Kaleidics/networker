import React from "react";
import Header from "../layout/Header";
import PodcastContainer from "../elements/PodcastContainer";
import HostingSites from "../elements/HostingSites";

import Parser from "rss-parser";

let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            podcast: []
        };
    }

    componentDidMount() {
        (async () => {
            let feed = await parser.parseURL(CORS_PROXY + "https://pinecast.com/feed/netwrkr");
            console.log(feed.items);
            this.setState({
                podcast: feed.items
            });
        })();
    }

    render() {
        console.log(this.state.podcast);
        return (
            <div className="home">
                <Header latestPodcast={this.state.podcast} />
                <HostingSites />
                <PodcastContainer />
            </div>
        );
    }
}
