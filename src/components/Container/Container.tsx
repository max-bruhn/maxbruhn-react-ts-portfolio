import React, { useEffect } from "react";

function Container(props: any) {
  return (
    <>
      <div className="container mx-auto">{props.children}</div>
    </>
  );
}

export default Container;
