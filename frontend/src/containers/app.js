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
import MateriasCuarto from './Grados/CuartoPrimaria/MateriasCuarto/MateriasCuarto';
import Grados from './Grados/Grados';
import navbar from './Navbar/navbar';
import './app.scss';
import MateCuarto from './Grados/CuartoPrimaria/MateriasCuarto/Mate/MateCuarto';
import CienciasCuarto from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/CienciasCuarto';
import IdiomaCuarto from './Grados/CuartoPrimaria/MateriasCuarto/Idioma/IdiomaCuarto';
import MateQuinto from './Grados/QuintoPrimaria/MateriasQuinto/Mate/MateQuinto';
import CienciasQuinto from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/CienciasQuinto';
import IdiomaQuinto from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/IdiomaQuinto';
import MateriasQuinto from './Grados/QuintoPrimaria/MateriasQuinto/MateriasQuinto';
import MateriasSexto from './Grados/SextoPrimaria/MateriasSexto/MateriasSexto';
import MateSexto from './Grados/SextoPrimaria/MateriasSexto/Mate/MateSexto';
import IdiomaSexto from './Grados/SextoPrimaria/MateriasSexto/Idioma/IdiomaSexto';
import CienciasSexto from './Grados/SextoPrimaria/MateriasSexto/Ciencias/CienciasSexto';
import Temas from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/Temas/Temas';
import numeracion_6_digitos from './Grados/CuartoPrimaria/MateriasCuarto/Mate/Temas/numeracion_6_digitos';
import origen_de_vida from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Temas/origen_de_vida';
import origen_mayas from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Temas/origen_mayas';
import celulas from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Temas/celulas';
import anatomia from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Temas/anatomia';
import inves_cienti from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Temas/inves_cienti';
import materia from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Temas/materia';
import division from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Temas/division';
import fracciones from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Temas/fracciones';
import multiplos from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Temas/multiplos';
import num_mix from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Temas/num_mix';
import propor from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Temas/propor';
import val_posi from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Temas/val_posi';
import articulo from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Temas/articulo';
import fig_lit from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Temas/fig_lit';
import pro_personal from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Temas/pro_personal';
import oracion from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Temas/oracion';
import verbo from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Temas/verbo';
import sustantivos from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Temas/sustantivos';

const Div = styled.div`
  background-color: ${({ theme }) => theme.body};
  display: flex;
`;

const App = () => {
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
          <Route path="/materiascuarto" component={MateriasCuarto} />

          <Route path="/matecuarto" component={MateCuarto} />
          <Route path="/cienciasCuarto" component={CienciasCuarto} />
          <Route path="/idiomacuarto" component={IdiomaCuarto} />
          <Route path="/materiasquinto" component={MateriasQuinto} />
          <Route path="/tema1" component={Temas}  />
          <Route path="/origen_de_vida" component={origen_de_vida} />
          <Route path="/origen_mayas" component={origen_mayas} />
          <Route path="/celulas" component={celulas} />
          <Route path="/anatomia" component={anatomia} />
          <Route path="/materia" component={materia} />
          <Route path="/inves_cienti" component={inves_cienti} />
          <Route path="/matequinto" component={MateQuinto} />
          <Route path="/division" component={division} />
          <Route path="/fracciones" component={fracciones} />
          <Route path="/multiplos" component={multiplos} />
          <Route path="/num_mix" component={num_mix} />
          <Route path="/propor" component={propor} />
          <Route path="/val_posi" component={val_posi} />   
          <Route path="/verbo" component={verbo} />
          <Route path="/articulo" component={articulo} />
          <Route path="/oracion" component={oracion} />
          <Route path="/pro_personal" component={pro_personal} />
          <Route path="/sustantivos" component={sustantivos} />
          <Route path="/fig_lit" component={fig_lit} />
          <Route path="/cienciasquinto" component={CienciasQuinto} />
          <Route path="/idiomaquinto" component={IdiomaQuinto} />
          <Route path="/materiassexto" component={MateriasSexto} />
          <Route path="/matesexto" component={MateSexto} />
          <Route path="/cienciassexto" component={CienciasSexto} />
          <Route path="/idiomasexto" component={IdiomaSexto} />
          <Route path="/numeracion_6_digitos" component={numeracion_6_digitos} />
        </Router>

      </>
    </ThemeProvider>
  );
}

export default App;
