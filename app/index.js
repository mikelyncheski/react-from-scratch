import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const App = () => {
//   return <div>Eat me</div>;
// };

class App extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
