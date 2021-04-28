import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login/Login';
import Toggle from './Theme/Toggle';
import { lightTheme, darkTheme } from './Theme/theme';
import { GlobalStyles } from './Theme/global';
import { useDarkMode } from './Theme/useDarkMode';
import Register from './Register/Register';
import Materia from './Materias/Materias';
import Grados from './Grados/Grados';
import navbar from './Navbar/navbar';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Router>
        <Route path="/" component={navbar} />
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/grados" component={Grados} />
        <Route path="/materia" component={Materia} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
