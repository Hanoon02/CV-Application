import React from "react";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";
import FormControls from "./components/FormControls";
class App extends React.Component {
  render() {
    return (
      <div className="bg-gradient-to-b from-black to-stone-900 text-slate-100">
        <Header />
        <Personal />
        <Experience />
        <Education />
        <FormControls />
      </div>
    );
  }
}

export default App;