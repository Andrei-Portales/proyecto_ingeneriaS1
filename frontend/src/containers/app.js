import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Grado from '../components/grado';
import Login from './Login/Login';
import Register from './Register/Register';
import Materia from './Materias/Materias';
import Grados from './Grados/Grados';
import navbar from './Navbar/navbar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={navbar} />

        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/grados" component={Grados} />
        <Route path="/materia" component={Materia} />
      </Router>
    );
  }
}

export default App;
