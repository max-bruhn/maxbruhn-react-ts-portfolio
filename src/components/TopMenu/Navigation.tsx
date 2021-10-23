import React, { useEffect } from "react";
import styles from "./TopMenu.module.scss";
import NavLinks from "./NavLinks";

function Navigation() {
  return (
    <>
      <ul className={`list-none float-right leading-10`}>
        <NavLinks />
      </ul>
    </>
  );
}

export default Navigation;
