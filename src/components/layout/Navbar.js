import React from 'react';
import ListItem from '../elements/ListItem';

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="nav">
                <ul className="nav__navbar">
                    <ListItem name={"Home"} value={1} onClick={this.props.onClick} selectedView={this.props.selectedView} />
                    {/* <ListItem name={"Podcasts"} value={2} onClick={this.props.onClick} selectedView={this.props.selectedView} /> */}
                    <ListItem name={"The Show"} value={3} onClick={this.props.onClick} selectedView={this.props.selectedView} />
                    <ListItem name={"The Host"} value={4} onClick={this.props.onClick} selectedView={this.props.selectedView} />
                </ul>
            </nav>
        );
    }
}