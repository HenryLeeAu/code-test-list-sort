type ConditionT = {
  text: string,
}

type ForecastDayT = {
  date: string,
  day: {
    maxtemp_c: number,
    mintemp_c: number,
    avgtemp_c: number,
    condition: ConditionT,
  }
}

export type WeatherSuccessT = {
  current: {
    condition: ConditionT,
    feelslike_c: number,
    temp_c: number,
  },
  forecast: {
    forecastday: Array<ForecastDayT>
  },
  location: {
    name: string,
  }
}

export type WeatherFailedT = string;




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
