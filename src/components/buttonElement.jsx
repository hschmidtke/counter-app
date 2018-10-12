import React from "react";

const ButtonElement = ({ eventOfButton, classOfButton, textOfButton }) => (
  <button onClick={eventOfButton} className={classOfButton}>
    {textOfButton}
  </button>
);

export default ButtonElement;
