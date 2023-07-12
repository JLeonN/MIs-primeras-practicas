import React, { useState } from "react";
import propTypes from "prop-types";

const Greetingf = (props) => {
  const [age, satage] = useState(29);

  const birthday = () => {
    setage(age + 1);
  }

  return (
    <div>
      <h1>
        Hola { props.name } desde componente funcional !
      </h1>
      <h2>
        Tu edad es de { age }
      </h2>
      <div>
        <button onClick={birthday}>
          Cumplir años!
        </button>
      </div>
    </div>
  );
};

Greetingf.propTypes = {
  name: propTypes.string
};

export default Greetingf;