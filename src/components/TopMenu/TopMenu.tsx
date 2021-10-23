import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import Icon from "./Icon";
import Burger from "./Burger/Burger";
import Navigation from "./Navigation";

function TopMenu() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  return (
    <>
      <Container>
        <div className="h-12">
          <Icon />

          {window.innerWidth > 1024 ? <Navigation /> : <Burger />}
        </div>
      </Container>
    </>
  );
}

export default TopMenu;
