// import react package
import React from "react";


// takes in children passed down from Home/Saved JS pages, the container is set to fluid
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// takes in children passed down from Home/Saved JS pages, the div is set to fluid
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// takes in children passed down from Home/Saved JS pages
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")
      }
    >
      {children}
    </div>
  );
}