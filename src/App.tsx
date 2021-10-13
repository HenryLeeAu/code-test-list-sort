import * as React from "react";

import services from "./services";
import StatusWrapper from "./StatusWrapper";
import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";

import { WeatherSuccessT, WeatherFailedT } from "./services/type";
import { LoadingStatusT } from "./StatusWrapper/type";

const App: React.FC = () => {
  const [currentCity, setCurrentCity] = React.useState("");
  const [weatherInfo, setWeatherInfo] = React.useState<WeatherSuccessT | null>(
    null
  );
  const [loadingStatus, setLoadingStatus] = React.useState<LoadingStatusT>(
    LoadingStatusT.idle
  );
  const [messageInfo, setMessage] = React.useState<WeatherFailedT>("");

  const disabled = loadingStatus === LoadingStatusT.loading;

  const onCityStringChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentCity(e.currentTarget.value);
  };

  const onWeatherSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoadingStatus(LoadingStatusT.loading);

    try {
      const res = await services.getCurrentWeather({ city: currentCity });
      setLoadingStatus(LoadingStatusT.success);
      setWeatherInfo(res);
      setMessage("");
    } catch (error) {
      setLoadingStatus(LoadingStatusT.failed);
      setWeatherInfo(null);
      setMessage(error);
    }
  };

  return (
    <>
      <form onSubmit={onWeatherSearch}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          data-testid="city"
          value={currentCity}
          onChange={onCityStringChange}
          disabled={disabled}
        />
        <button type="submit" disabled={disabled}>
          Search
        </button>
      </form>
      <StatusWrapper status={loadingStatus} message={messageInfo}>
        {weatherInfo && (
          <>
            <h1>{weatherInfo.location.name}</h1>
            <CurrentWeather
              currentTemp={weatherInfo.current.temp_c}
              feelsLikeTemp={weatherInfo.current.feelslike_c}
              condition={weatherInfo.current.condition.text}
            />
            {weatherInfo.forecast.forecastday.map(
              ({
                date,
                day: { maxtemp_c, mintemp_c, avgtemp_c, condition },
              }) => (
                <FutureWeather
                  key={date}
                  date={date}
                  maxTemp={maxtemp_c}
                  minTemp={mintemp_c}
                  avgTemp={avgtemp_c}
                  condition={condition.text}
                />
              )
            )}
          </>
        )}
      </StatusWrapper>
    </>
  );
};

export default App;
