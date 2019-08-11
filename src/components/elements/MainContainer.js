import React from 'react';
import Featured from '../layout/Featured';
import AllPodcasts from '../layout/AllPodcasts';

export default class MainContainer extends React.Component {

    render() {
        let content;

        if (this.props.selectedView === 1) {
            content = <Featured />
        }

        if (this.props.selectedView === 2) {
            content = <AllPodcasts />
        }
        
        return (
            <main>
                {content}
            </main>
        )
    }
}