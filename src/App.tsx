import * as React from "react";

import services from "./services";
import StatusWrapper from "./StatusWrapper";
import useService from "./useService";

import SearchResultPage from "./SearchResultPage";
import type {HotelInfoT} from './services/type';

import { LoadingStatusT } from "./StatusWrapper/type";

const App: React.FC = () => {
  const { status, data } : { status: LoadingStatusT, data: Array<HotelInfoT>}= useService(services.getHotelList);
  /* const [currentCity, setCurrentCity] = React.useState("");
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

  };*/

  return (
    <StatusWrapper status={status} message={"error"}>
      <SearchResultPage data={data} />
    </StatusWrapper>
  );
};

export default App;
