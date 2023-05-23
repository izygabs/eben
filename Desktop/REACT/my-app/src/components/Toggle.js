import { useState } from "react";

function Toggle() {
  let [btn, setBtn] = useState(false);
  const change = () => {
    setBtn(!btn);
  };

  return (
    <div>
      <p>{btn}</p>
      <button onClick={change}>{btn ? "ON" : "OFF"}</button>;
    </div>
  );
}
export default Toggle;
