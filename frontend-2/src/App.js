import React, { Suspense } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

//paginas
const Login = React.lazy(() => import("./pages/Login/Login"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const Grados = React.lazy(() => import("./pages/Grados/Grados"));
const Grado = React.lazy(() => import("./pages/Grado/Grado"));
const Materias = React.lazy(() => import("./pages/Materias/Materias"));
const Tema = React.lazy(() => import("./pages/Tema/Tema"));
const Add = React.lazy(() => import("./pages/Add/Add"));
const Contacto = React.lazy(() => import("./pages/Contacto/Contacto"));
const FAQ = React.lazy(() => import("./pages/FAQ/FAQ.js"));
const About = React.lazy(() => import('./pages/AboutUs/AboutUs.js'))
//const PageNotFound = React.lazy(() => import("./pages/404/PageNotFound"));
//const Profile = React.lazy(() => import("./pages/Profile/Profile"));

// EJERCICIOS
const Exercise10001 = React.lazy(() =>
  import("./components/Ejercicios/10000/10001/Exercise10001")
);
const Exercise10002 = React.lazy(() =>
  import("./components/Ejercicios/10000/10002/Exercise10002")
);
const Exercise10003 = React.lazy(() =>
  import("./components/Ejercicios/10000/10003/Exercise10003")
);
const Exercise10004 = React.lazy(() =>
  import("./components/Ejercicios/10000/10004/Exercise10004")
);
const Exercise10005 = React.lazy(() =>
  import("./components/Ejercicios/10000/10005/Exercise10005")
);
const Exercise10006 = React.lazy(() =>
  import("./components/Ejercicios/10000/10006/Exercise10006")
);
const Exercise10007 = React.lazy(() =>
  import("./components/Ejercicios/10000/10007/Exercise10007")
);
const Exercise10008 = React.lazy(() =>
  import("./components/Ejercicios/10000/10008/Exercise10008")
);

//10
const Exercise10011 = React.lazy(() =>
  import("./components/Ejercicios/10010/10011/Exercise10011")
);
const Exercise10012 = React.lazy(() =>
  import("./components/Ejercicios/10010/10012/Exercise10012")
);
const Exercise10013 = React.lazy(() =>
  import("./components/Ejercicios/10010/10013/Exercise10013")
);
const Exercise10014 = React.lazy(() =>
  import("./components/Ejercicios/10010/10014/Exercise10014")
);
const Exercise10015 = React.lazy(() =>
  import("./components/Ejercicios/10010/10015/Exercise10015")
);

const App = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/profile" exact>
          {/*{isAuth && <Profile />}*/}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10001" exact>
          {isAuth && <Exercise10001 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10002" exact>
          {isAuth && <Exercise10002 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10003" exact>
          {isAuth && <Exercise10003 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10004" exact>
          {isAuth && <Exercise10004 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10005" exact>
          {isAuth && <Exercise10005 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10006" exact>
          {isAuth && <Exercise10006 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10007" exact>
          {isAuth && <Exercise10007 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10008" exact>
          {isAuth && <Exercise10008 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>

        <Route path="/ejercicio/10011" exact>
          {isAuth && <Exercise10011 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10012" exact>
          {isAuth && <Exercise10012 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10013" exact>
          {isAuth && <Exercise10013 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10014" exact>
          {isAuth && <Exercise10014 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/10015" exact>
          {isAuth && <Exercise10015 />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Layout>
          <Route path="/" exact>
            {isAuth && <LoadingSpinner />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/add" exact>
            {isAuth && <Add />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {!isAuth && <Login />}
            {isAuth && <Redirect to="/" />}
          </Route>
          <Route path="/register">
            {!isAuth && <Register />}
            {isAuth && <Redirect to="/" />}
          </Route>
          <Route path="/grados" exact>
            {isAuth && <Grados />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/grados/:grado" exact>
            {isAuth && <Grado />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/grados/:grado/:materia" exact>
            {isAuth && <Materias />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/grados/:grado/:materia/:id" exact>
            {isAuth && <Tema />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/contacto" exact>
            {isAuth && <Contacto />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/preguntas-frecuentes" exact>
            {isAuth && <FAQ />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          <Route path="/about-us" exact>
            {isAuth && <About />}
            {!isAuth && <Redirect to="/login" />}
          </Route>
          {/* <Route component={PageNotFound} /> */}
        </Layout>
      </Switch>
    </Suspense>
  );
};

export default App;
