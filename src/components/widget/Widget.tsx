import React from "react";
import "./widget.scss";
type Props = {
  label: string;
  value: string;
};

const Widget = ({ label, value }: Props) => {
  return (
    <div className="widget">
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default Widget;
