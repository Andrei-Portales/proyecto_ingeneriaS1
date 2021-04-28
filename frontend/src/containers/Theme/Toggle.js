import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  cursor: pointer;
  margin: auto;
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      {isLight ? 'Dark Mode' : 'Light Mode'}
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
