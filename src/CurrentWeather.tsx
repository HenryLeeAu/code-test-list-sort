import * as React from "react";

type Props = {
  currentTemp: number;
  feelsLikeTemp: number,
  condition: string,
};

const CurrentWeather: React.FC<Props> = ({
  currentTemp,
  feelsLikeTemp,
  condition
}) => (
  <>
    <h2>{condition}</h2>
    <h3>Feel like {feelsLikeTemp}°C</h3>
    <h3>Temp {currentTemp}°C</h3>
  </>
);

export default CurrentWeather;
