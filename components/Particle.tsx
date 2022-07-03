import React from "react";

const Particle = () => {
  console.log("runnings");
  return (
    <>
      <div id="stars" className="absolute left-0 right-0" />
      <div id="stars2" />
      <div id="stars3" />
    </>
  );
};

export default Particle;
// export default React.memo(Particle);
