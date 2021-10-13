import axios from "axios";

import services from ".";

describe("service - getCurrentWeather", () => {
  it("returns valid response", async () => {
    const payload = { data: "any data " };

    jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.resolve(payload));

    await expect(
      services.getCurrentWeather({ city: "any city" })
    ).resolves.toEqual(
      payload.data
    );
  });

  it("returns error response with message", async () => {
    const payload = {
      response: {
        data: {
          error: {
            message: "message from server",
          },
        },
      },
    };

    jest.spyOn(axios, "get").mockImplementation(() => Promise.reject(payload));

    await expect(
      services.getCurrentWeather({ city: "any city" })
    ).rejects.toEqual(
      payload.response.data.error.message,
    );
  });

  it("returns error without message", async () => {
    const defaultErrorMessage = 'Unexpected error, please try again.';

    jest.spyOn(axios, "get").mockImplementation(() => Promise.reject({}));

    await expect(
      services.getCurrentWeather({ city: "any city" })
    ).rejects.toEqual(
      defaultErrorMessage
    );
  });
});
