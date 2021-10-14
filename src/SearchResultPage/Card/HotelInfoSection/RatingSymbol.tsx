import * as React from "react";

import "./RatingSymbol.scss";

type Props = {
  type: string;
  ratingValue: number;
  currentNumber: number;
};

const RatingSymbol: React.FC<Props> = ({
  type,
  ratingValue,
  currentNumber,
}) => {
  const getClassName = () => {
    if (currentNumber - ratingValue === 0.5) {
      return "half";
    }

    if (currentNumber > ratingValue) {
      return "disabled";
    }

    return "enabled";
  };

  return (
    <div className={`rating-icon ${getClassName()}`}>
      {type === "star" ? "★" : "●"}
    </div>
  );
};

export default RatingSymbol;
