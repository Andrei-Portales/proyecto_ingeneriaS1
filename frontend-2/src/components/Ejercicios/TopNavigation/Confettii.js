import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Confettii = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width - 20}
      height={height - 10}
      numberOfPieces={400}
      initialVelocityY={40}
      recycle={false}
    />
  );
};

export default Confettii;
