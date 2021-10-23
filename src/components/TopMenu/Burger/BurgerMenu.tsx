import React, { useEffect } from "react";

import NavLinks from "../NavLinks";

function BurgerMenu(props: any) {
  function handleClick() {
    props.setShowBurger(true);
  }
  return (
    <>
      <div className=" absolute right-0 min-h-screen bg-gray max-h-screen overflow-hidden pt-2">
        <button onClick={handleClick} className="float-right pr-2">
          X
        </button>
        <ol className="flex flex-col pt-4">
          <NavLinks classNames="text-left pt-8 pl-2" />
        </ol>
      </div>
    </>
  );
}

export default BurgerMenu;
