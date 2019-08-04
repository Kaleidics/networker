import React from "react";
import Parser from "rss-parser";
import AudioCard from "audiocard";

let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default class PodcastContainer extends React.Component {
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

        let podcastList;
        podcastList = this.state.podcast.map( (podcast, index) => {
            return (
                <div className="podcast" style={{ animationDelay: `${index / 15}s` }} tabindex={`${index}`}>
                    <AudioCard title={podcast.title} art={podcast.itunes.image} source={podcast.enclosure.url} skipBackSeconds={10} skipForwardSeconds={30} color="#006bb6" background="aliceblue" key={index} />
                </div>
            );
        });

        console.log("in render", this.state.podcast);
        return (
            <div className="podcastcontainer">
                <h2 className="heading-secondary">Latest Episodes</h2>
                <hr className="separator"/>
                {podcastList}
            </div>
        );
    }
}
