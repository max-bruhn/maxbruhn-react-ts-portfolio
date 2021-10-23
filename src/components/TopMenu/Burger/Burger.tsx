import React, { useEffect, useState } from "react";
import NavLinks from "../NavLinks";
import styles from "./TopMenu.module.scss";

import BurgerMenu from "./BurgerMenu";

function BurgerIcon(props: any) {
  function handleClick() {
    props.setShowBurger(false);
  }
  return (
    <>
      <button onClick={handleClick} className="pt-2">
        <div className="w-6 h-1 bg-light my-1 mx-0"></div>
        <div className="w-6 h-1 bg-light my-1 mx-0"></div>
        <div className="w-6 h-1 bg-light my-1 mx-0"></div>
      </button>
    </>
  );
}

function Burger() {
  const [showBurger, setShowBurger] = useState(true);

  function toggleBurger() {
    alert("clicked btn");
  }

  return (
    <>
      <div className="float-right ">
        {showBurger ? (
          <BurgerIcon setShowBurger={setShowBurger} />
        ) : (
          <BurgerMenu setShowBurger={setShowBurger} />
        )}
      </div>
    </>
  );
}

export default Burger;
