import "./styles.css";
import { useSelector, useDispatch } from 'react-redux'
import {increase, decrease, asyncDecrease, asyncIncrease} from './action'


export default function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state=> state.value)
  return (
    <div className="App">
      <button onClick={() => dispatch(asyncDecrease(12))}>-12 ASYNC</button>
      <button onClick={() => dispatch(decrease(1))}>-1</button>
      <button onClick={() => dispatch(decrease(5))}>-5</button>
      <button onClick={() => dispatch(decrease(12))}>-12</button>

      <span>{counter}</span>
      <button onClick={() => dispatch(increase(1))}>+1</button>
      <button onClick={() => dispatch(increase(5))}>+5</button>
      <button onClick={() => dispatch(increase(12))}>+12</button>
      <button onClick={() => dispatch(asyncIncrease(12, 1000))}>+12 ASYNC</button>
    </div>
  );
}
