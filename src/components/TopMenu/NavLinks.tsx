import React, { useEffect } from "react";
import styles from "./TopMenu.module.scss";

interface Props {
  classNames?: string;
}

function NavLinks({ classNames }: Props) {
  return (
    <>
      <li className={`list-none float-left text-light pr-8 ${classNames}`}>
        <span className="text-accent pr-2">01.</span>
        <span>ABOUT</span>
      </li>
      <li className={`list-none float-left text-light pr-8 ${classNames}`}>
        <span className="text-accent pr-2">02.</span>
        <span>EXPERIENCE</span>
      </li>
      <li className={`list-none float-left text-light pr-8 ${classNames}`}>
        <span className="text-accent pr-2">03.</span>
        <span>WORK</span>
      </li>
      <li className={`list-none float-left text-light pr-8 ${classNames}`}>
        <span className="text-accent pr-2">04.</span>
        <span>PROJECTS</span>
      </li>
      <li className={`list-none float-left text-light ${classNames} `}>
        <span className="text-accent pr-2">05.</span>
        <span>CONTACT</span>
      </li>
    </>
  );
}

export default NavLinks;
