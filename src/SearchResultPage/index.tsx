import * as React from "react";

import Card from "./Card";
import "./index.scss";
import type { HotelInfoT } from "../services/type";

enum SortByT {
  unselected = "unselected",
  priceLow = "priceLow",
  priceHigh = "priceHigh",
}

type Props = {
  data: Array<HotelInfoT>;
};

const SearchResultPage: React.FC<Props> = ({ data }) => {
  const [sortBy, setSortBy] = React.useState<string>(SortByT.unselected);

  const options = [
    {
      value: SortByT.unselected,
      text: " -- select an option -- ",
    },
    {
      value: SortByT.priceLow,
      text: "Price low-high",
    },
    {
      value: SortByT.priceHigh,
      text: "Price high-low",
    },
  ];

  const onSortChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setSortBy(event.currentTarget.value);
  };

  const sortList = (list: Array<HotelInfoT>) => {
    const copiedList = [...list];

    if (sortBy === SortByT.priceLow) {
      return copiedList.sort(
        (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
      );
    }

    if (sortBy === SortByT.priceHigh) {
      return copiedList.sort(
        (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
      );
    }

    return list;
  };

  return (
    <div data-testid="search-result-page">
      <div className="list-header">
        <div className="total-number">
          <strong>{data.length}</strong> {`hotel${data.length > 1 ? "s" : ""} `}
          in <strong>Sydney.</strong>
        </div>
        <div>
          <label htmlFor="sortBy">
            <strong>{"Sort by "}</strong>
          </label>
          <select
            name="sortBy"
            onChange={onSortChange}
            value={sortBy}
            data-testid="sort-by-option"
          >
            {options.map(({ value, text }) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>
      </div>
      {sortList(data).map((hotelInfo) => (
        <Card key={hotelInfo.id} hotelInfo={hotelInfo} />
      ))}
    </div>
  );
};

export default SearchResultPage;
