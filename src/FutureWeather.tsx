import * as React from "react";

type Props = {
  date:string,
  maxTemp: number,
  minTemp: number,
  avgTemp: number,
  condition: string,
};

const FutureWeather: React.FC<Props> = ({
  date,
  maxTemp,
  minTemp,
  avgTemp,
  condition,
}) => (
  <> <h2>{date}</h2>
    <h2>{condition}</h2>
    <h3>maximum {maxTemp}°C</h3>
    <h3>minimum {minTemp}°C</h3>
    <h3>Average {avgTemp}°C</h3>
  </>
);

export default FutureWeather;
