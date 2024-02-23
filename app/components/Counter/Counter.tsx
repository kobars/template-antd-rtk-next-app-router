"use client";

import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
} from "@/lib/redux";

import { Button, Row } from "antd";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

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
