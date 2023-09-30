import { useState } from "react";
import Button from './Button';
import Modal from "./Modal";

function App() {
  const [count, setCount] = useState(false);

  const handleChange = () => {
    setCount(true)
  }
  return (
    <div className="App">
     <Button onClick={handleChange} value={count ? "close" : "open"} />
    {count ? <Modal setCount={setCount} title="hello" description="hello This is Modal!!" closeIcon="X" /> : null}
    </div>
  );
}

export default App;
