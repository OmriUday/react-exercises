import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/2-2/basics_of_jsx";
import Box1 from "./components/3-1/Box1";
import Quiz from "./components/3-2/Quiz";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    // <helloWorld />
    // <box1 />
    // <box2 />
    // <box3 />
    // <box4 />
    // <quiz />
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));