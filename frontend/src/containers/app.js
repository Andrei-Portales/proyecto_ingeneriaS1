import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Grado from '../components/grado';
import Login from './Login/Login';
import Register from './Register/Register';
import Materia from './Materias/Materias';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/materia" component={Materia} />
      </Router>
    );
  }
}

export default App;
