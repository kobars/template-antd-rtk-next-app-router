"use client";

import { useState } from "react";

import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from "@/lib/redux";

import { Button, Input, Row } from "antd";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div>
      <Row justify="space-around" align="middle">
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </Button>
        <h1>{count}</h1>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </Button>
      </Row>
    </div>
  );
};
