import React from "react";
import Header from "./components/Header";
import CVForms from "./components/CVForm";

class App extends React.Component{
  render() {
    return (
      <div className="bg-gradient-to-b from-black to-stone-900 text-slate-100">
        <Header />
        <CVForms />
      </div>
    );
  }
}

export default App;