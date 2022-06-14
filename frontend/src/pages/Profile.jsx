import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useCounter as useCounterGlobal } from "../providers/counter.jsx";

const Profile = () => {
  const {counter, increment, decrement} = useCounter();
  const {value, increment: goUp, decrement: goDown} = useCounterGlobal();

  return (
    <>
      <div>Profile</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>Value: {counter}</p>
      <button onClick={goUp}>+</button>
      <button onClick={goDown}>-</button>
      <p>Value: {value}</p>
    </>
  );
};

export default Profile;
