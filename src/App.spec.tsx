import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import services from "./services";

import App from "./App";

describe("<App />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("searches city and returns valid response", async () => {
    const res = {
      current: {
        condition: {
          text: 'Partly cloud',
        },
        feelslike_c: 17,
        temp_c: 19,
      },
      forecast: {
        forecastday: [{
          date: '2021-10-01',
          day: {
            maxtemp_c: 30,
            mintemp_c: 21,
            avgtemp_c: 26,
            condition: {
              text: 'Sunny'
            }
          }
        }]
      },
      location: {
        name: 'Sydney',
      },
    };

    jest.spyOn(services, "getCurrentWeather").mockImplementation(() =>
      Promise.resolve(res)
    );

    render(<App />);

    fireEvent.change(screen.getByTestId("city"), {
      target: { value: "Sydney" },
    });

    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      res.forecast.forecastday.forEach((forecastday) => {
        expect(screen.getByText(forecastday.date)).toBeTruthy();
        expect(screen.getByText(forecastday.day.condition.text)).toBeTruthy();
      })

    });
  });

  it("searches city and returns error response", async () => {
    const rej = 'no city found'

    jest.spyOn(services, "getCurrentWeather").mockImplementation(() =>
      Promise.reject(rej)
    );

    render(<App />);

    fireEvent.change(screen.getByTestId("city"), {
      target: { value: "Sydney" },
    });

    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      expect(screen.getByText(rej)).toBeTruthy();
    });
  });

});
