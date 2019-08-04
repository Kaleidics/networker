import React from "react";
import Parser from "rss-parser";
import AudioCard from "audiocard";

let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default class PodcastContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            podcast: ""
        };
    }

    componentDidMount() {
        (async () => {
            let feed = await parser.parseURL(CORS_PROXY + "https://pinecast.com/feed/netwrkr");
            console.log(feed.items);
            this.setState({
                podcast: feed.items[0].enclosure.url
            });
        })();
    }

    render() {
        console.log("in render", this.state.podcast);
        return <div />;
    }
}
