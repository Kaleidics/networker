import React from 'react';
import Featured from '../layout/Featured';
import AllPodcasts from '../layout/AllPodcasts';
import AboutShow from '../layout/AboutShow';
import AboutHost from '../layout/AboutHost';

export default class MainContainer extends React.Component {

    render() {
        let content;

        if (this.props.selectedView === 1) {
            content = <Featured />
        } 
        // else if (this.props.selectedView === 2) {
        //     content = <AllPodcasts />
        // } 
        else if (this.props.selectedView === 3) {
            content = <AboutShow />
        } else if (this.props.selectedView === 4 ) {
            content = <AboutHost />
        }
        
        return (
            <main>
                {content}
            </main>
        )
    }
}