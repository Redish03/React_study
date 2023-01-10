import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>plush</button>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>minus</button>
    </div>
  );
};

export default App;

//2번
/*import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>plush</button>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>minus</button>
    </div>
  );
};

export default App;
*/

//3번, HOOK
/*import { useRef } from "react";

const App = () => {
  // Typescript
  // const boxRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef(null);

  const handleChangeBackgorund = () => {
    if (!boxRef.current) return;
    boxRef.current.style.backgroundColor =
      boxRef.current.style.backgroundColor == "red" ? "blue" : "red";
  };
  //useEffect, useState : 훅.
  return (
    <div>
      <button onClick={handleChangeBackgorund}>Change Background</button>
      <div
        ref={boxRef}
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default App;
*/

//4번, 컴포넌트
/*
// 컴포넌트

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert("handleClick");
  };
  return (
    <div>
      <div>App</div>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
      <div>{count}</div>
      <Post
        title="post-title"
        count={count}
        onClick={handleClick}
        setCount={setCount}
      >
        Post
      </Post>
    </div>
  );
};


const Post = ({ title, children, count, onClick, setCount }) => {
  return (
    <>
      <div onClick={onClick}>
        <div>{title}</div>
        <div>{children}</div>
        <div>{count}</div>
      </div>
      <button onClick={() => setCount(count + 1)}>plus</button>
    </>
  );
};

export default App;
*/
