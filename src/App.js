import React from 'react';
import LoginPage from "./pages/LoginPage";
import {Switch, Route} from "react-router-dom";
import RepoPage from "./pages/RepoPage";


function App() {
    return (
        <div className="App">
                <Switch>
                    <Route exact path={"/login"} component={LoginPage}/>
                    <Route exact path={"/repo"} component={RepoPage}/>
                </Switch>
        </div>
    );
}

export default App;
