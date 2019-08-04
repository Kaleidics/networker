import React from 'react';
import Header from '../layout/Header';
import PodcastContainer from '../elements/PodcastContainer';
import HostingSites from '../elements/HostingSites';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header />
                <HostingSites />
                <PodcastContainer />
            </div>
        );
    }
}