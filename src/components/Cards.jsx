import React from "react";

const Card = (props) => {
  return (
    <div className="section card__container">
      <div className="icon-part">
        <img src={`${props.icon}`} alt="icon" />
      </div>
      <div className="card-info">
        <small>{props.cardTitle}</small>
        <h2>{props.value}</h2>
      </div>
    </div>
  );
};

export default Card;
