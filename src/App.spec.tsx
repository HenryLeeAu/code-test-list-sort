import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import services from "./services";

import App from "./App";
import data from "./mock/searchResults.json";

describe("<App />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("render hotels list", async () => {
    const res = data.results;

    jest
      .spyOn(services, "getHotelList")
      .mockImplementation(() => Promise.resolve(res));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("search-result-page")).not.toBeNull();
    });

    res.forEach((hotelInfo, index) => {
      expect(screen.getAllByTestId("hotel-name")[index].textContent).toBe(
        hotelInfo.property.title
      );
    });
  });

  it("changes sorting options to lower price", async () => {
    const res = data.results;

    jest
      .spyOn(services, "getHotelList")
      .mockImplementation(() => Promise.resolve(res));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("sort-by-option")).not.toBeNull();
    });

    fireEvent.change(screen.getByTestId("sort-by-option"),  {
      target: { value: "priceLow" }
    })

    const sortedData = [...res].sort((a,b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount);

    sortedData.forEach((hotelInfo, index) => {
      expect(screen.getAllByTestId("hotel-name")[index].textContent).toBe(
        hotelInfo.property.title
      );
    });
  });

  it("changes sorting options to higher price", async () => {
    const res = data.results;

    jest
      .spyOn(services, "getHotelList")
      .mockImplementation(() => Promise.resolve(res));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("sort-by-option")).not.toBeNull();
    });

    fireEvent.change(screen.getByTestId("sort-by-option"),  {
      target: { value: "priceHigh" }
    })

    const sortedData = [...res].sort((a,b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount);

    sortedData.forEach((hotelInfo, index) => {
      expect(screen.getAllByTestId("hotel-name")[index].textContent).toBe(
        hotelInfo.property.title
      );
    });
  });

  /*it("searches city and returns error response", async () => {
    const rej = 'no city found'

    jest.spyOn(services, "getHotelList").mockImplementation(() =>
      Promise.reject(rej)
    );

    render(<App />);


  });*/
});
