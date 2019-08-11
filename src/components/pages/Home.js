import React from "react";
import Header from "../layout/Header";
import PodcastContainer from "../elements/PodcastContainer";
import HostingSites from "../elements/HostingSites";
import MainContainer from "../elements/MainContainer";
import ReactAudioPlayer from "react-audio-player";
import AudioCard from "audiocard";
import AudioPlayer from "react-h5-audio-player";

import Parser from "rss-parser";

let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default class Home extends React.Component {
                   constructor(props) {
                       super(props);

                       this.state = {
                           currentView: 1,
                           currentPodcast: ""
                       };
                       this.setCurrentView = this.setCurrentView.bind(this);
                   }

                   componentDidMount() {
                       (async () => {
                           let feed = await parser.parseURL(CORS_PROXY + "https://pinecast.com/feed/netwrkr");
                           console.log(feed.items);
                           this.setState({
                               currentPodcast: feed.items[0]
                           });
                       })();
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
                       let latestPodcastData = this.state.currentPodcast;
                       let latestSrc = latestPodcastData.enclosure ? latestPodcastData.enclosure.url : '';
                       let latestImage = latestPodcastData.itunes ? latestPodcastData.itunes.image : '';
                       let latestTitle = latestPodcastData.title;
                       console.log(latestSrc)
                        let latestPlayer = latestPodcastData ? (
                            <div className="main-audio-player">
                                <div className="main-audio-player__content">
                                    <img className="main-audio-player__image" src={latestImage} />
                                    <h3 className="main-audio-player__title">{latestTitle}</h3>
                                </div>
                                <AudioPlayer src={latestSrc} autoPlay={false} />
                            </div>
                        ) : (
                            ""
                        );

                       return (
                           <div className="home">
                               <Header onClick={this.setCurrentView} selectedView={this.state.currentView} />
                               <MainContainer selectedView={this.state.currentView} />
                               {latestPlayer}
                           </div>
                       );
                   }
               }
