import { useEffect, useState } from "react";
import "./App.css";
import { WorkerList } from "./WorkerList";

function App() {
  const [total, setTotal] = useState(0);
  const [workers, setWorkers] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("hello");
    fetch("http://localhost:3004/workers")
      .then((res) => res.json())
      .then((res) => setWorkers(res));
  }, []);

  useEffect(() => {
    setTotal(workers.reduce((a, b) => a + b.salary, 0));
  }, [workers]);

  return (
    <>
      <h1>count: {workers.length}</h1>
      <button onClick={() => setShow(!show)}>Switch</button>
      {show && <WorkerList list={workers} total={total} />}
    </>
  );
}

export default App;
