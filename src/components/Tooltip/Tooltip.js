import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component {

  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }
  }

  render() {
    return (
      <span className="qa-tooltip">
        {this.props.children}
      </span>
    );
  }
}

export default Tooltip

