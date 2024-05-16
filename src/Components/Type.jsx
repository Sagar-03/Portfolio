import React from "react";
import Typewriter from "typewriter-effect";
// import Font from "FontAwesomeIcon icon={faCode}";

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ["Web Developer", "Web Designer", "FreeLancer", "Open Source Contributor", "ENTERPRENEUR"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Type;
