import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import redux
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./redux/store";
//import router
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Container from "./components/Container";
// import rootReducer from "./reducers/rootReducer";
import Movie from "./components/pages/Movie";

// == Material UI ==
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// == MAIN THEME == (super man noises)
import themeFile from "./utility/theme";

const theme = createMuiTheme(themeFile);

let saveToLocalStorage = (state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem("state", serializeState);
    // localStorage["state"] = serializeState [[[also works]]]
  } catch (e) {
    console.log(e);
  }
};

let loadFromLocalStorage = (params) => {
  try {
    const serializeState = localStorage.getItem("state");
    if (serializeState === null) {
      return undefined;
    } else {
      return JSON.parse(serializeState);
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

// let store = createStore(
//   rootReducer,
//   persistedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/watchlist" component={Container} />
            <Route exact path="/aboutus" component={Container} />
            <Route exact path="/movielist" component={Movie} />
            <Route exact path="/movielist/:{movieid}" component={Movie} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
