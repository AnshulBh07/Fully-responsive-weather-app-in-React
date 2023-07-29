import React, { useState } from "react";

const UserInput = (props) => {
  //using controlled components
  const [cityTyped, setCityTyped] = useState("");

  function handleKeypress(event) {
    if (event.key == "Enter") {
      console.log(event.target.value);
      setCityTyped(event.target.value);

      props.parentCall(event.target.value);
      event.target.blur();
    }
  }

  function handleChange(event) {
    setCityTyped(event.target.value);
  }

  function handleChildClick(event) {
    const unitType = event.target.innerText.slice(1);
    console.log(unitType);

    props.parentBtnClick(unitType);
  }

  return (
    <React.Fragment>
      <div className="section section__inputs">
        <input
          type="text"
          placeholder="Enter city..."
          onKeyDown={handleKeypress}
          onChange={handleChange}
          value={cityTyped}
        />
        <div className="temp_btns">
          <button className="btn_F" onClick={handleChildClick}>
            °F
          </button>
          <button className="btn_C" onClick={handleChildClick}>
            °C
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserInput;
