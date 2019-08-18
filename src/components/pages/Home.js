import React from "react";
import Header from "../layout/Header";
import PodcastContainer from "../elements/PodcastContainer";
import HostingSites from "../elements/HostingSites";
import MainContainer from "../elements/MainContainer";
import ReactAudioPlayer from "react-audio-player";
import AudioCard from "audiocard";
import AudioPlayer from "react-h5-audio-player";
import Banner from "../layout/Banner";

import { connect } from "react-redux";
import { fetchPodcasts } from "../../actions/index";

class Home extends React.Component {
                   constructor(props) {
                       super(props);

                       this.state = {
                           currentView: 1
                           
                       };
                       this.setCurrentView = this.setCurrentView.bind(this);
                   }

                   componentDidMount() {
                       console.log('trigged')
                       this.props.dispatch(fetchPodcasts());
                   }

                   setCurrentView(view) {
                       this.setState(
                           {
                               currentView: view
                           },
                           () => console.log("clicked", this.state.currentView)
                       );
                   }

                   render() {
                       console.log('current playing', this.props.currentPlaying)
                       let latestPodcastData;
                       let latestSrc
                       let latestImage
                       let latestTitle

                       if (this.props.currentPlaying) {
                           console.log("home current", this.props.currentPlaying)
                        latestPodcastData = this.props.currentPlaying
                        latestSrc = latestPodcastData.enclosure ? latestPodcastData.enclosure.url : latestPodcastData.mp3;
                        latestImage = latestPodcastData.itunes ? latestPodcastData.itunes.image : latestPodcastData.image;
                        latestTitle = latestPodcastData.title;
                       }
                       
                       
                       
                       console.log(latestSrc)


                        let latestPlayer = latestPodcastData ? (
                            <div className="main-audio-player">
                                <div className="main-audio-player__content">
                                    <img className="main-audio-player__image" src={latestImage} />
                                    <h3 className="main-audio-player__title">{latestTitle}</h3>
                                </div>
                                <AudioPlayer src={latestSrc} autoPlay={true} />
                            </div>
                        ) : (
                            null
                        );

                       return (
                           <div className="home">
                               <Header onClick={this.setCurrentView} selectedView={this.state.currentView} />
                               <Banner data={this.props.podcasts[0]}/>
                               <MainContainer selectedView={this.state.currentView} />
                               {latestPlayer}
                           </div>
                       );
                   }
               }

const mapStateToProps = state => ({
    podcasts: state.podcasts,
    currentPlaying: state.currentPlaying
});

export default connect(mapStateToProps)(Home)