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
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Upload = React.lazy(() => import("./pages/Upload/Upload"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const DashboardTemas = React.lazy(() =>
  import("./pages/Dashboard/Temas/Dashboard")
);
const Quiz = React.lazy(() => import("./pages/Assessment/Quiz"));

const Ejercicio = React.lazy(() => import("./components/Ejercicios/Ejercicio"));

const App = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/upload" exact>
          {isAuth && <Upload />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/dashboard" exact>
          {isAuth && <Dashboard />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/dashboard/temas" exact>
          {isAuth && <DashboardTemas />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/assessment" exact>
          {isAuth && <Quiz />}
          {!isAuth && <Redirect to="/login" />}
        </Route>

        <Route path="/profile" exact>
          {isAuth && <Profile />}
          {!isAuth && <Redirect to="/login" />}
        </Route>
        <Route path="/ejercicio/:id/:id" exact>
          {isAuth && <Ejercicio />}
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
          {/* <Route component={PageNotFound} /> */}
        </Layout>
      </Switch>
    </Suspense>
  );
};

export default App;
