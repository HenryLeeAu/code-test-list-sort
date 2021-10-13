import axios from "axios";
import { WeatherSuccessT } from "./type";
import config from "../config";

const getCurrentWeather = ({
  city,
}: {
  city: string;
}): Promise<WeatherSuccessT> =>
  new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${config.weatherApiKey}&q=${city}&days=3&aqi=no&alerts=no`
      )
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(
          err.response?.data?.error?.message ??
            "Unexpected error, please try again."
        );
      });
  });

const services = {
  getCurrentWeather,
};

export default services;
