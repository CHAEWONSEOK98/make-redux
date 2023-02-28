import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
      <p className="font-bold text-[7rem]">{count}</p>
      <div>
        <button
          className="w-[5rem] border border-10  border-black p-5 font-bold text-[2rem]"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="w-[5rem] border border-10 border-black ml-2 p-5 font-bold text-[2rem]"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>

      <input
        className="text-center font-bold text-[3rem] mt-5 w-[10rem] h-[10rem] border border-black border-10"
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div className="mt-4">
        <button
          className="border border-black p-3 mr-4"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button className="border border-black p-3" onClick={resetAll}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
