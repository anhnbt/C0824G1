import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action/CounterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(increment(10))}>Inrement +10</button>
    </>
  );
};

export default Counter;
