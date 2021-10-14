import * as React from "react";

import RatingSymbol from './RatingSymbol';
import "./index.scss";

type Props = {
  hotelName: string;
  address: string,
  offerName: string,
  isCancelFeeFree: boolean,
  ratingType: string,
  ratingValue: number,
};

const HotelInfoSection: React.FC<Props> = ({
  hotelName,
  address,
  offerName,
  isCancelFeeFree,
  ratingType,
  ratingValue,
 }) => (
  <div className="hotel-info-section">
    <div>
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 600,
          margin: "0",
          maxWidth: "310px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "inline-block",
        }}
        data-testid="hotel-name"
      >
        {hotelName}
      </h2>
      <div
        style={{
          display: "inline-block",
        }}
      >
        {
          [1,2,3,4,5].map(number =>  (
            <RatingSymbol
              key={number}
              type={ratingType}
              ratingValue={ratingValue}
              currentNumber={number}
            />
          ))
        }

      </div>
    </div>

    <div
      data-testid="hotel-address"
      style={{ color: "#999999", fontSize: "12px" }}
    >
      {address}
    </div>
    <div
      style={{
        color: "#e40000",
        textDecoration: "underline",
        paddingTop: "20px",
        fontSize: "12px",
      }}
    >
      {offerName}
    </div>
    {isCancelFeeFree && (
      <div
        style={{
          color: "#278c6a",
          paddingTop: "24px",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        Free cancellation
      </div>
    )}
  </div>
);

export default React.memo(HotelInfoSection);
