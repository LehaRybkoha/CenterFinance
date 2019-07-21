import React from "react";
import { json } from "./data";

export default function({ match }) {
  const { id } = match.params;
  return <div>{json[id].f}</div>;
}
