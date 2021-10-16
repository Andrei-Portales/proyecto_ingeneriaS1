import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

//paginas
// const Login = React.lazy(() => import("./pages/Login/Login"));
import Login from "./pages/Login/Login";
// const Register = React.lazy(() => import("./pages/Register/Register"));
import Register from "./pages/Register/Register";
// const Grados = React.lazy(() => import("./pages/Grados/Grados"));
import Grados from "./pages/Grados/Grados";
// const Grado = React.lazy(() => import("./pages/Grado/Grado"));
import Grado from "./pages/Grado/Grado";
// const Materias = React.lazy(() => import("./pages/Materias/Materias"));
import Materias from "./pages/Materias/Materias";
// const Tema = React.lazy(() => import("./pages/Tema/Tema"));
import Tema from "./pages/Tema/Tema";
// const Ejercicio = React.lazy(() => import("./components/Ejercicios/Ejercicio"));
import Ejercicio from "./components/Ejercicios/Ejercicio";
// const Add = React.lazy(() => import("./pages/Add/Add"));
import Add from "./pages/Add/Add";
// const Contacto = React.lazy(() => import("./pages/Contacto/Contacto"));
import Contacto from "./pages/Contacto/Contacto";
// const FAQ = React.lazy(() => import("./pages/FAQ/FAQ.js"));
import FAQ from "./pages/FAQ/FAQ";
// const Profile = React.lazy(() => import("./pages/Profile/Profile"));
import Profile from "./pages/Profile/Profile";
// const Upload = React.lazy(() => import("./pages/Upload/Upload"));
import Upload from "./pages/Upload/Upload";
// const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
import Dashboard from "./pages/Dashboard/Dashboard";
// const DashboardTemas = React.lazy(() =>
//   import("./pages/Dashboard/Temas/Dashboard")
// );
import DashboardTemas from "./pages/Dashboard/Temas/Dashboard";
// const Quiz = React.lazy(() => import("./pages/Assessment/Quiz"));

const App = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/grados/:id/:id/:id/ejercicio/:id/:id" exact>
        <Ejercicio />
      </Route>
      <Route path="/upload" exact>
        <Upload />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/dashboard/temas" exact>
        <DashboardTemas />
      </Route>

      <Layout>
        <Route path="/" exact>
          <Grados />
        </Route>
        <Route path="/add" exact>
          <Add />
        </Route>
        <Route path="/contacto" exact>
          <Contacto />
        </Route>
        <Route path="/preguntas-frecuentes" exact>
          <FAQ />
        </Route>
        <Route path="/perfil" exact>
          <Profile />
        </Route>
        <Route path="/grados" exact>
          <Grados />
        </Route>
        <Route path="/grados/:grado" exact>
          <Grado />
        </Route>
        <Route path="/grados/:grado/:materia" exact>
          <Materias />
        </Route>
        <Route path="/grados/:grado/:materia/:id" exact>
          <Tema />
        </Route>
      </Layout>
    </Switch>

    // <Suspense fallback={<LoadingSpinner />}>
    //   <Switch>
    //     <Route path="/login">
    //       {!isAuth && <Login />}
    //       {isAuth && <Redirect to="/" />}
    //     </Route>
    //     <Route path="/register">
    //       {!isAuth && <Register />}
    //       {isAuth && <Redirect to="/" />}
    //     </Route>
    //     <Route path="/upload" exact>
    //       {isAuth && <Upload />}
    //       {!isAuth && <Redirect to="/login" />}
    //     </Route>
    //     <Route path="/dashboard" exact>
    //       {isAuth && <Dashboard />}
    //       {!isAuth && <Redirect to="/login" />}
    //     </Route>
    //     <Route path="/dashboard/temas" exact>
    //       {isAuth && <DashboardTemas />}
    //       {!isAuth && <Redirect to="/login" />}
    //     </Route>
    //     <Route path="/assessment" exact>
    //       {isAuth && <Quiz />}
    //       {!isAuth && <Redirect to="/login" />}
    //     </Route>

    //     <Route path="/profile" exact>
    //       {isAuth && <Profile />}
    //       {!isAuth && <Redirect to="/login" />}
    //     </Route>
    //     <Route path="/grados/:id/:id/:id/ejercicio/:id/:id" exact>
    //       {isAuth && <Ejercicio />}
    //       {!isAuth && <Redirect to="/login" />}
    //     </Route>

    //     <Layout>
    //       <Route path="/" exact>
    //         {isAuth && <Grados />}
    //         {!isAuth && <Redirect to="/login" />}
    //       </Route>
    //       <Route path="/add" exact>
    //         {isAuth && <Add />}
    //         {!isAuth && <Redirect to="/login" />}
    //       </Route>

    //       <Route path="/grados" exact>
    //         {isAuth && <Grados />}
    //         {!isAuth && <Redirect to="/login" />}
    //       </Route>
    //       <Route path="/grados/:grado" exact>
    //         {isAuth && <Grado />}
    //         {!isAuth && <Redirect to="/login" />}
    //       </Route>
    //       <Route path="/grados/:grado/:materia" exact>
    //         {isAuth && <Materias />}
    //         {!isAuth && <Redirect to="/login" />}
    //       </Route>
    //       <Route path="/grados/:grado/:materia/:id" exact>
    //         {isAuth && <Tema />}
    //         {!isAuth && <Redirect to="/login" />}
    //       </Route>
    //       <Route path="/contacto" exact>
    //         {isAuth && <Contacto />}
    //         {!isAuth && <Redirect to="/login" />}
    //       </Route>
    //       <Route path="/preguntas-frecuentes" exact>
    //         {isAuth && <FAQ />}
    //         {!isAuth && <Redirect to="/login" />}
    //       </Route>
    //       {/* <Route component={PageNotFound} /> */}
    //     </Layout>
    //   </Switch>
    // </Suspense>
  );
};

export default App;
