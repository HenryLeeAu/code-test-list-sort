import * as React from "react";
import type { HotelInfoT } from "../services/type";

type Props = {
  hotelInfo: HotelInfoT;
};

const Card: React.FC<Props> = ({ hotelInfo }) => {

  return <div data-testid='hotel-name'>{ hotelInfo.property.title}</div>;
};

export default Card;
