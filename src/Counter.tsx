import React, { useState, useRef, useEffect } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  //null!でnullは絶対無いよって感じ 関数の実行時にnullはありえない場合に使う
  const ref = useRef<HTMLInputElement>(null!);

  const focusInput = () => {
    ref.current.focus();
  };

  return (
    <>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times.</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </>
  );
};

export default Counter;
