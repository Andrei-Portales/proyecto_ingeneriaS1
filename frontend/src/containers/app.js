import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login/Login';
import { lightTheme, darkTheme } from './Theme/theme';
import { GlobalStyles } from './Theme/global';
import { useDarkMode } from './Theme/useDarkMode';
import Toggle from './Theme/Toggle';
import Register from './Register/Register';
import Materia from './Materias/Materias';
import Grados from './Grados/Grados';
import navbar from './Navbar/navbar';

const Div = styled.div`
  background-color: ${({ theme }) => theme.body};
  display: flex;
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <Div className="topbar">
            <Route path="/" component={navbar} />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </Div>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/grados" component={Grados} />
          <Route path="/materia" component={Materia} />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
