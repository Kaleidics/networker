import React from 'react';
import FeatureCard from '../elements/FeatureCard';
import Parser from "rss-parser";

let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default class Featured extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            podcasts: []
        }
    }

    componentDidMount() {
        (async () => {
            let feed = await parser.parseURL(CORS_PROXY + "https://pinecast.com/feed/netwrkr");
            this.setState({
                podcasts: feed.items
            });
        })();
    }

    render() {
        let featuredPodcasts = this.state.podcasts.slice(0,3).map( (podcast, index) => {
            return <FeatureCard title={podcast.title} name={podcast.itunes.author} image={podcast.itunes.image} key={index} style={{ animationDelay: `${index / 15}s` }} />;
        });

        console.log('this.sate.podcasts', this.state.podcasts);
        return(
            <section className="podcast-section">
            {featuredPodcasts}
            </section>
        )
    }
}