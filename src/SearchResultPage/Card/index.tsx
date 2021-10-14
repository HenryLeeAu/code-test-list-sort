import * as React from "react";

import ImageSection from "./ImageSection";
import HotelInfoSection from "./HotelInfoSection";
import PriceSection from "./PriceSection";
import "./index.scss";
import type { HotelInfoT } from "../../services/type";

type Props = {
  hotelInfo: HotelInfoT;
};

const Card: React.FC<Props> = ({ hotelInfo: { offer, property } }) => (
  <div className="card">
    <ImageSection
      title={offer.promotion.title}
      url={property.previewImage.url}
      caption={property.previewImage.caption}
    />
    <div className="info-wrapper">
      <HotelInfoSection
        hotelName={property.title}
        address={property.title}
        offerName={offer.name}
        isCancelFeeFree={
          offer.cancellationOption.cancellationType === "FREE_CANCELLATION"
        }
        ratingType={property.rating.ratingType}
        ratingValue={property.rating.ratingValue}
      />
      <PriceSection
        currency={offer.displayPrice.currency}
        totalAmount={offer.displayPrice.amount}
        saveAmount={offer.savings?.amount}
      />
    </div>
  </div>
);

export default Card;
