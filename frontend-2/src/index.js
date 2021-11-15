import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import Context from "./store/context";
import useExerciseGlobal from "./store/useExerciseGlobal";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const Index = () => {
  const stor = useExerciseGlobal();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Context.Provider value={stor}>
          <App />
        </Context.Provider>
      </Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
