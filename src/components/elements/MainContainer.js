import React from 'react';
import Featured from '../layout/Featured';

export default class MainContainer extends React.Component {

    render() {
        let content;

        if (this.props.selectedView === 1) {
            content = <Featured />
        }
        return (
            <main>
                {content}
            </main>
        )
    }
}