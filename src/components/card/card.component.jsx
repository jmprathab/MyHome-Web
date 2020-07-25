import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="w-100 card text-white bg-dark mb-3 d-inline-block">
        {this.props.header ? (
          <div className="card-header">
            <h4>{this.props.header}</h4>
          </div>
        ) : ''}
        {this.props.subtitle ? (
          <h6 className="card-subtitle m-2 ml-3 text-muted">{this.props.subtitle}</h6>
        ) : ''}
        {this.props.body || this.props.text || this.props.title || this.props.textSubtitle ? (
          <div className="card-body">
            {this.props.title ? (
              <h4 className="card-title">
                {this.props.title}
              </h4>
            ) : ''}
            {this.props.textSubtitle ? (
              <h6 className="card-subtitle mb-2 text-muted">
                {this.props.textSubtitle}
              </h6>
            ) : ''}
            {this.props.text ? (
              <div className="card-text" style={this.props.textStyle}>
                {this.props.text}
              </div>
            ) : ''}
            {this.props.body}
          </div>
        ) : ''}
        {this.props.children}
      </div>
    )
  }
}

export default Card;
