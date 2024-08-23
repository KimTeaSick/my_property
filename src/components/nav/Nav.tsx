import React from "react";
import NavButton from "./NavButton";
import { NAV_LIST } from "./variables";

const Nav = () => {
  return (
    <div className="nav">
      {NAV_LIST.map(({ label, goal }) => (
        <NavButton title={label} goal={goal} />
      ))}
    </div>
  );
};

export default Nav;
