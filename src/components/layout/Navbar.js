import React from 'react';
import ListItem from '../elements/ListItem';

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="nav">
                <ul className="nav__navbar">
                    <ListItem name={"Featured"} value={1} onClick={this.props.onClick} selectedView={this.props.selectedView} />
                    <ListItem name={"Podcasts"} value={2} onClick={this.props.onClick} selectedView={this.props.selectedView} />
                    <ListItem name={"About Show"} value={3} onClick={this.props.onClick} selectedView={this.props.selectedView} />
                    <ListItem name={"About Host"} value={4} onClick={this.props.onClick} selectedView={this.props.selectedView} />
                </ul>
            </nav>
        );
    }
}