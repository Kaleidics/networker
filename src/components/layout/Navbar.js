import React from 'react';
import { Link } from 'react-router-dom';
import RoundedBottom from "../elements/RoundedBottom";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav">
                <ul className="nav__navbar">
                    <li className="nav__item" value="1" onClick={(e) => this.props.onClick(e.target.value)}>Featured<RoundedBottom /></li>
                    <li className="nav__item" value="2">All Podcasts<RoundedBottom /></li>
                    <li className="nav__item" value="3">About the Show<RoundedBottom /></li>
                    <li className="nav__item" value="4">About the Host<RoundedBottom /></li>
                </ul>
            </nav>
        )
    }
}