import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isVisible: false
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter() {
    this.setState({ isVisible: true })
  }

  handleMouseLeave() {
    this.setState({ isVisible: false })
  }

  render() {
    const tooltip = (
      <div className="qa-tooltip">
        {this.props.text}
      </div>
    )

    return (
      <span className="qa-tooltip-container"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            >
        {this.props.children}
        {this.state.isVisible && tooltip}
      </span>
    );
  }
}

export default Tooltip

