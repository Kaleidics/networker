import React from 'react';
import Header from '../layout/Header';
import PodcastContainer from '../elements/PodcastContainer';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header />
                <PodcastContainer />
            </div>
        )
    }
}