type RatingT = {
  ratingValue: number,
  ratingType: string,
}

type PropertyT = {
  title: string,
  address: Array<string>,
  rating: RatingT,
  previewImage: {
    url: string,
    caption: string,
  }
}
type PriceT = {
  amount: number,
  currency: string,
}

type OfferT = {
  name: string,
  displayPrice: PriceT,
  savings: PriceT | null,
  promotion: {
    title: string,
  }
}

export type HotelInfoT = {
  id: string,
  property: PropertyT,
  offer: OfferT,
}
