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
