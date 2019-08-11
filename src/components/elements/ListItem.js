import React from 'react';
import RoundedBottom from "../elements/RoundedBottom";

export default class ListInput extends React.Component {

    render() {
        let bottomBorder = this.props.value === this.props.selectedView ? <RoundedBottom /> : "";
        return (
            <li className="nav__item" value={this.props.value} onClick={e => this.props.onClick(e.target.value)}>
                {this.props.name}
                {bottomBorder}
            </li>
        );
    }
}