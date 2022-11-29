import React from "react";
import Typewriter from "typewriter-effect";
import { useSelector} from 'react-redux';

function Type() {
  const typeWriter = useSelector(state => state.data.writer);
  const typeArray = typeWriter && typeWriter.split(',');

  return (
    <Typewriter
      options={{
        strings: typeArray,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
