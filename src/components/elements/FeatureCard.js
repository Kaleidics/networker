import React from 'react';

export default class FeatureCard extends React.Component {
    render() {
        return (
            <div className="feature-card" style={this.props.style}>
                <div className="feature-card__content">
                <h2 className="feature-card__title">
                    {this.props.title}
                </h2>
                <p className="feature-card__name">{this.props.name}</p>
                <p className="feature-card__occupation">Host</p>
                <div className="feature-card__play"><div className="feature-card__arrow-right"></div></div>
                <div className="feature-card__image-container"><img className="feature-card__image" src={this.props.image} /></div>
                </div>
            </div>
        )
    }
}