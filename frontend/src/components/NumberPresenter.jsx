import React from "react";
import { useCounter } from "./CounterProvider";

const NumberView = () => {
  const {value} = useCounter();

  return (
    <>
      <div>NumberView</div>
      <p>{value}</p>
    </>
  );
};

export default NumberView;
