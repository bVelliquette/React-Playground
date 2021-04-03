/** VENDORS */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/** COMPONENTS */
import MyHeader from "./components/Views/MyHeader";
import Sidebar from "./components/Components/Sidebar";
import CPBDemo from "./components/Views/CPBDemo";
/** CONTEXT */
import MainProvider from "./context/mainContext/useMainContext";
/** SCSS */
import "./scss/_css.scss";
/** TYPES */
import "./types/enums";
import "./types/types";
function App() {
  return (
    <>
      <Router>
        <MainProvider>
          <div className="base">
            <MyHeader />
            <Sidebar>
              <Switch>
                <Route path="/CPB">
                  <CPBDemo />
                </Route>
                <Route path="/">
                  <h1>HOME</h1>
                </Route>
              </Switch>
            </Sidebar>
          </div>
        </MainProvider>
      </Router>
    </>
  );
}

export default App;
