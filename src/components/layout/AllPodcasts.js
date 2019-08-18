import React from "react";
import FeatureCard from "../elements/FeatureCard";
import { connect } from "react-redux";


class AllPodcasts extends React.Component {

    render() {
        let featuredPodcasts = this.props.podcasts.map((podcast, index) => {
            return <FeatureCard title={podcast.title} name={podcast.itunes.author} mp3={podcast.enclosure.url} image={podcast.itunes.image} content={podcast.contentSnippet} key={index} style={{ animationDelay: `${index / 10}s` }} />;
        });

        console.log("this.sate.podcasts", this.props.podcasts);
        return <section className="podcast-section">{featuredPodcasts}</section>;
    }
}

const mapStateToProps = state => ({
    podcasts: state.podcasts
});

export default connect(mapStateToProps)(AllPodcasts);