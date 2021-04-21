import React, { Component } from 'react';

// import Grado from '../components/grado';
// import Login from './Login/Login';
import Register from './Register/Register';
import Materia from './Materias/Materias';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Sprint 1</h1>
        {/* <Grado /> */}
        <Register />
        <Materia />
      </div>
    );
  }
}

export default App;