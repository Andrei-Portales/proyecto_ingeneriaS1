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
import Temas from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/Temas/sistema_digestivo';
import numeracion_6_digitos from './Grados/CuartoPrimaria/MateriasCuarto/Mate/Temas/numeracion_6_digitos';
import suma_resta from './Grados/CuartoPrimaria/MateriasCuarto/Mate/Temas/suma_resta';
import operaciones_combinadas from './Grados/CuartoPrimaria/MateriasCuarto/Mate/Temas/operaciones_combinadas';
import conjuntos from './Grados/CuartoPrimaria/MateriasCuarto/Mate/Temas/conjuntos';
import operaciones_conjuntos from './Grados/CuartoPrimaria/MateriasCuarto/Mate/Temas/operaciones_conjuntos';
import multiplos_divisores from './Grados/CuartoPrimaria/MateriasCuarto/Mate/Temas/multiplos_divisores';
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
import diptongo from './Grados/SextoPrimaria/MateriasSexto/Idioma/Temas/diptongo';
import hiato from './Grados/SextoPrimaria/MateriasSexto/Idioma/Temas/hiato';
import lirico from './Grados/SextoPrimaria/MateriasSexto/Idioma/Temas/lirico';
import poesia from './Grados/SextoPrimaria/MateriasSexto/Idioma/Temas/poesia';
import semantica from './Grados/SextoPrimaria/MateriasSexto/Idioma/Temas/semantica';
import triptongo from './Grados/SextoPrimaria/MateriasSexto/Idioma/Temas/triptongo';
import potencias from './Grados/SextoPrimaria/MateriasSexto/Mate/Temas/potencias';
import exponente_negativo from './Grados/SextoPrimaria/MateriasSexto/Mate/Temas/exponente_negativo';
import notacion_cientifica from './Grados/SextoPrimaria/MateriasSexto/Mate/Temas/notacion_cientifica';
import raiz_cuadrada from './Grados/SextoPrimaria/MateriasSexto/Mate/Temas/raiz_cuadrada';
import angulos from './Grados/SextoPrimaria/MateriasSexto/Mate/Temas/angulos';
import area_figuras_planas from './Grados/SextoPrimaria/MateriasSexto/Mate/Temas/area_figuras_planas';
import sistema_digestivo from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/Temas/sistema_digestivo';
import ser_humano from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/Temas/ser_humano';
import clasificacion_alimentos from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/Temas/clasificacion_alimentos';
import sistema_respiratorio from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/Temas/sistema_respiratorio';
import Ejer_Anatomia from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Ejercicios/Ejer_Anatomia';
import Ejer_Celulas from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Ejercicios/Ejer_Celulas';
import Ejer_Investi from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Ejercicios/Ejer_Investi';
import Ejer_Materia from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Ejercicios/Ejer_Materia';
import Ejer_Ovida from './Grados/QuintoPrimaria/MateriasQuinto/Ciencias/Ejercicios/Ejer_Ovida';
import Ejer_Clasificacion_Alimentos from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/Ejercicios/Ejer_Clasificacion_Alimentos';
import Ejer_Ser_Humano from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/Ejercicios/Ejer_Ser_Humano';
import Ejer_Sistema_Digestivo from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/Ejercicios/Ejer_Sistema_Digestivo';
import Ejer_Sistema_Respiratorio from './Grados/CuartoPrimaria/MateriasCuarto/Ciencias/Ejercicios/Ejer_Sistema_Respiratorio';
import Ejer_arti from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Ejercicios/Ejer_arti';
import Ejer_fig from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Ejercicios/Ejer_fig';
import Ejer_oracion from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Ejercicios/Ejer_oracion';
import Ejer_pro from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Ejercicios/Ejer_pro';
import Ejer_sustantivo from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Ejercicios/Ejer_sustantivo';
import Ejer_verbo from './Grados/QuintoPrimaria/MateriasQuinto/Idioma/Ejercicios/Ejer_verbo';
import Ejer_division from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Ejercicios/Ejer_division';
import Ejer_fracc from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Ejercicios/Ejer_fracc';
import Ejer_multi from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Ejercicios/Ejer_multi';
import Ejer_propor from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Ejercicios/Ejer_propor';
import Ejer_num from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Ejercicios/Ejer_num';
import Ejer_val from './Grados/QuintoPrimaria/MateriasQuinto/Mate/Ejercicios/Ejer_val';


const Div = styled.div`
  background-color: ${({ theme }) => theme.navbar};
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
          <Route path="/triptongo" component={triptongo} />
          <Route path="/diptongo" component={diptongo} />
          <Route path="/hiato" component={hiato} />
          <Route path="/lirico" component={lirico} />
          <Route path="/poesia" component={poesia} />
          <Route path="/semantica" component={semantica} />
          <Route path="/numeracion_6_digitos" component={numeracion_6_digitos} />
          <Route path="/suma_resta" component={suma_resta} />
          <Route path="/operaciones_combinadas" component={operaciones_combinadas} />
          <Route path="/conjuntos" component={conjuntos} />
          <Route path="/operaciones_conjuntos" component={operaciones_conjuntos} />
          <Route path="/multiplos_divisores" component={multiplos_divisores} />
          <Route path="/potencias" component={potencias} />
          <Route path="/exponente_negativo" component={exponente_negativo} />
          <Route path="/notacion_cientifica" component={notacion_cientifica} />
          <Route path="/raiz_cuadrada" component={raiz_cuadrada} />
          <Route path="/angulos" component={angulos} />
          <Route path="/area_figuras_planas" component={area_figuras_planas} />
          <Route path="/sistema_digestivo" component={sistema_digestivo} />
          <Route path="/ser_humano" component={ser_humano} />
          <Route path="/clasificacion_alimentos" component={clasificacion_alimentos} />
          <Route path="/sistema_respiratorio" component={sistema_respiratorio} />
          <Route path="/Ejer_Anatomia" component={Ejer_Anatomia} />
          <Route path="/Ejer_Celulas" component={Ejer_Celulas} />
          <Route path="/Ejer_Ovida" component={Ejer_Ovida} />
          <Route path="/Ejer_Materia" component={Ejer_Materia} />
          <Route path="/Ejer_Investi" component={Ejer_Investi} />
          <Route path="/Ejer_Clasificacion_Alimentos" component={Ejer_Clasificacion_Alimentos} />
          <Route path="/Ejer_Ser_Humano" component={Ejer_Ser_Humano} />
          <Route path="/Ejer_Sistema_Digestivo" component={Ejer_Sistema_Digestivo} />
          <Route path="/Ejer_Sistema_Respiratorio" component={Ejer_Sistema_Respiratorio} />
          <Route path="/Ejer_arti" component={Ejer_arti} />
          <Route path="/Ejer_fig" component={Ejer_fig} />
          <Route path="/Ejer_oracion" component={Ejer_oracion} />
          <Route path="/Ejer_pro" component={Ejer_pro} />
          <Route path="/Ejer_sustantivo" component={Ejer_sustantivo} />
          <Route path="/Ejer_verbo" component={Ejer_verbo} />
          <Route path="/Ejer_division" component={Ejer_division} />
          <Route path="/Ejer_fracc" component={Ejer_fracc} />
          <Route path="/Ejer_multi" component={Ejer_multi} />
          <Route path="/Ejer_num" component={Ejer_num} />
          <Route path="/Ejer_propor" component={Ejer_propor} />
          <Route path="/Ejer_val" component={Ejer_val} />


        </Router>

      </>
    </ThemeProvider>
  );
}

export default App;
