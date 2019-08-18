import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import { connect } from "react-redux";
import { setPlaying } from '../../actions/index';

 class Banner extends React.Component {
     handleSetPlaying = () => {
         console.log(this.props, "triggered set playing");
         this.props.setPlaying(this.props.data);
     };

     render() {

        let activeCircle;
        console.log(this.props.currentPlaying)
        console.log("banner", this.props.data)

        if (this.props.currentPlaying && this.props.currentPlaying.enclosure) {
            console.log('testing true')
            console.log(this.props.currentPlaying);
            console.log(this.props.data);
            if (this.props.currentPlaying.enclosure.url === this.props.data.enclosure.url) {
                activeCircle = <div className="banner__player-triggered" />;
                console.log('trigged banner')
            }
        }
        

         console.log("banner", this.props.data);

         let title, snippet, image;
         if (this.props.data) {
             snippet = this.props.data.contentSnippet;
             image = this.props.data.itunes.image;
             title = this.props.data.title;
         }

         return (
             <div className="banner">
                 <div className="banner__main">
                     <h1>NETWRKR with Julian Abeleda</h1>
                     <h2>Latest Episode</h2>
                 </div>
                 <div className="banner__sub">
                     <div className="banner__player-container" onClick={this.handleSetPlaying}>
                         <div className="banner__player-arrow" />
                         {activeCircle}
                     </div>

                     <div className="banner__content-container">
                         <h3>{title}</h3>
                         <p>{snippet}</p>
                     </div>
                     <div className="banner__image-container">
                         <img className="banner__image" src={image} alt={title} />
                     </div>
                 </div>
             </div>
         );
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
)(Banner);