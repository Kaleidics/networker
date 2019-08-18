import React from 'react';
import { connect } from "react-redux";
import { setPlaying } from '../../actions/index';
class FeatureCard extends React.Component {


    handleSetPlaying =() => {
        console.log(this.props, 'triggered set playing')
        this.props.setPlaying(this.props);
    }

    render() {
        console.log('card', this.props.currentPlaying, this.props.mp3)
        let activeCircle;

        if (this.props.currentPlaying.mp3 === this.props.mp3) {
            activeCircle = <div className="feature-card__play-triggered" />;
        }

        return (
            <div className="feature-card" style={this.props.style}>
                <div className="feature-card__content">
                <h2 className="feature-card__title">
                    {this.props.title}
                </h2>
                <p className="feature-card__name">{this.props.name}</p>
                <p className="feature-card__occupation">Host</p>
                <p className="feature-card__shownotes">{this.props.content}</p>
                <div className="feature-card__play" onClick={this.handleSetPlaying}><div className="feature-card__arrow-right"></div></div>
                {activeCircle}
                <div className="feature-card__image-container"><img className="feature-card__image" src={this.props.image} /></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentPlaying: state.currentPlaying
});

const mapDispatchToProps = dispatch => {
    return {
        setPlaying: playingPodcast => {
            dispatch(setPlaying(playingPodcast));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeatureCard);