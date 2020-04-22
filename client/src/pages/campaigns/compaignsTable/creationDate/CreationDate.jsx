import React from "react";
import { getZeroFirstFormat } from "../../../../utils/utils";

function CreationDate(props) {
  const date = new Date(+props.date);

  const day = getZeroFirstFormat(date.getDate());
  const month = getZeroFirstFormat(date.getMonth() + 1);
  const year = date.getFullYear();

  return <div>{`${day}/${month}/${year}`}</div>;
}

export default CreationDate;
