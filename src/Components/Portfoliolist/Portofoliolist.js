import React from "react";
import "./Portofoliolist.scss";

export default function Portofoliolist({ id, title, active, setselect }) {
  return (
    <li
      className={active ? "list active" : "list "}
      onClick={() => setselect(id)}
    >
      {title}
    </li>
  );
}
