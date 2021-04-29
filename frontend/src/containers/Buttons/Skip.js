/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './skip.scss';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';

// COLOR APLICADO ESPECIFIAMENTE DEPENDIENDO EL MODO DARK/LIGHT
// LOS DEMAS ESTILOS ESTAN EN skip.scss
const SkipButton = styled.button`
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
`;

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
      <SkipButton type="submit" onClick={this.toggleAnimation} className={`skip-button ${this.state.isClicked ? 'clicked' : ''}`}>
        <span className="saltar">SALTAR</span>
        <i><FontAwesomeIcon icon={faSpaceShuttle} /></i>
      </SkipButton>
    );
  }
}

export default Skip;
