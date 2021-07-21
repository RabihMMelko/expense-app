//this is the code executed initially

//importing ReactDOM
import ReactDOM from "react-dom";



import "./index.css";
import App from "./App";

/*
 ReactDOM.render takes 2 arguments

-arg1

-arg2 is a default JS DOM API (selecting element by ID)

*/

ReactDOM.render(<App />, document.getElementById("root"));
