/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './skip.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';

class Skip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  toggleAnimation() {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  }

  render() {
    return (
      <button type="submit" onClick={this.toggleAnimation} className={`${this.state.isClicked ? 'clicked' : ''}`}>
        <span className="saltar">SALTAR</span>
        <i><FontAwesomeIcon icon={faSpaceShuttle} /></i>
      </button>
    );
  }
}

export default Skip;