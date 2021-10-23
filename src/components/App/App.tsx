import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

import TopMenu from "../TopMenu/TopMenu";
import Hero from "../Hero/Hero";
import About from "../About/About";

import StateContext from "../../StateContext";
import DispatchContext from "../../DispatchContext";

function App() {
  // const initialState = {
  //   mobileNav: false,
  //   showBurger: false,
  // };

  // function ourReducer(draft: any, action: any) {
  //   switch (action.type) {
  //     case "showMobile":
  //       draft.mobileNav = true;
  //       return;
  //     case "showBurger":
  //       draft.showBurger = true;
  //       return;
  //   }
  // }

  // const [state, dispatch] = useReducer(ourReducer, initialState);
  return (
    // <StateContext.Provider value={state}>
    //   <DispatchContext.Provider value={dispatch}>
    <div className="App bg-dark h-full min-h-screen">
      <TopMenu />

      <Hero />

      <About />
    </div>
    //   </DispatchContext.Provider>
    // </StateContext.Provider>
  );
}

export default App;
