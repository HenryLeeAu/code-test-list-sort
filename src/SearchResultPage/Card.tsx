import * as React from "react";
import type { HotelInfoT } from "../services/type";

type Props = {
  hotelInfo: HotelInfoT;
};

const Card: React.FC<Props> = ({ hotelInfo }) => {
  return (
    <div>
      <span data-testid="hotel-name">{hotelInfo.property.title}</span>
      <span>Price:  {hotelInfo.offer.displayPrice.amount}</span>
    </div>
  );
};

export default Card;
