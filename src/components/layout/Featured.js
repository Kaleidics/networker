import React from 'react';
import FeatureCard from '../elements/FeatureCard';
import { connect } from "react-redux";

class Featured extends React.Component {

    render() {
        console.log("featured", this.props.podcasts)
        let featuredPodcasts = this.props.podcasts.slice(1,4).map((podcast, index) => {
            return <FeatureCard all={this.props} title={podcast.title} name={podcast.itunes.author} mp3={podcast.enclosure.url} image={podcast.itunes.image} content={podcast.contentSnippet} key={index} style={{ animationDelay: `${index / 15}s` }} />;
        });

        
        return(
            <section className="podcast-section">
            {featuredPodcasts}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    podcasts: state.podcasts
});

export default connect(mapStateToProps)(Featured);