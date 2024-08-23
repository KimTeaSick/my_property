import React from "react";
import "./NavButton.scss";
import Link from "next/link";

type Props = {
  title: string;
  goal: string;
};

const NavButton = ({ title, goal }: Props) => {
  return (
    <Link href={goal}>
      <button className="nav-button">{title}</button>
    </Link>
  );
};

export default NavButton;
