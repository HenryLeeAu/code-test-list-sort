import { HotelInfoT } from "./type";
import data from '../mock/searchResults.json';

const getHotelList = (): Promise<Array<HotelInfoT>> => (
  new Promise((resolve) => {
    resolve(data.results)
  })
);

const services = {
  getHotelList,
};

export default services;
