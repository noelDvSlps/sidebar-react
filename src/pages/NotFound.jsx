/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const [counter, setCounter] = useState(10);

  const navigateHome = () => {
    navigate("/");
  };

  const navigate = useNavigate();
  // setTimeout(() => {
  //   navigateHome();
  // }, 5000);
  useEffect(() => {
    counter > 0
      ? setTimeout(() => setCounter(counter - 1), 1000)
      : navigateHome();
  }, [counter]);
  return (
    <div>
      <h1>Not Found</h1>

      <span>
        `Will be redirected to <button onClick={navigateHome}>Home</button> in{" "}
        {counter} seconds`
      </span>
    </div>
  );
};
