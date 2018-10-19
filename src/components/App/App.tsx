import * as React from "react";
const logo = require("./logo.png"); //tslint:disable-line
import "./App.css";

const App = () => {
    return(
        <div>
        <img src={logo} height="100px"/>
            <h3>Hello World</h3>
        </div>
    );
};

export default App;
