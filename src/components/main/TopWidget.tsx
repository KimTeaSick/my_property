import React from "react";
import Widget from "../widget/Widget";
import { commma } from "@/util/utils";

import "./main.scss";

const DUMMY_DATA = [
  { label: "Balance", value: 10000000 },
  { label: "Deposit", value: 10000000 },
  { label: "Buy", value: 10000000 },
  { label: "Sell", value: 10000000 },
  { label: "Profit and Loss", value: 10000000 },
];

const TopWidget = () => {
  return (
    <div className="top-widget-section">
      {DUMMY_DATA.map(({ label, value }) => (
        <Widget label={label} value={commma(value)} />
      ))}
    </div>
  );
};

export default TopWidget;
