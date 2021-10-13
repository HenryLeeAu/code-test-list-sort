import * as React from "react";
import type { HotelInfoT } from "../services/type";
import Card from "./Card";

enum SortByT {
  unselected = "unselected",
  priceLow = "priceLow",
  priceHeight = "priceHigh",
}

type Props = {
  data: Array<HotelInfoT>;
};

const SearchResultPage: React.FC<Props> = ({ data }) => {
  const [sortBy, setSortBy] = React.useState<string>(SortByT.unselected);

  const onSortChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setSortBy(event.currentTarget.value);
  };

  const sortList = (list: Array<HotelInfoT>) => {
    if (sortBy === "priceLow") {
      return [...list].sort(
        (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
      );
    }

    if (sortBy === "priceHigh") {
      return [...list].sort(
        (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
      );
    }

    return list;
  };
  return (
    <div data-testid="search-result-page">
      <label htmlFor="sortBy">Choose a car:</label>
      <select
        name="sortBy"
        onChange={onSortChange}
        value={sortBy}
        data-testid="sort-by-option"
      >
        <option value={SortByT.unselected}> -- select an option -- </option>
        <option value={SortByT.priceLow}>Price (Low to high)</option>
        <option value={SortByT.priceHeight}>Price (High to low)</option>
      </select>
      {sortList(data).map((hotelInfo) => (
        <Card key={hotelInfo.id} hotelInfo={hotelInfo} />
      ))}
    </div>
  );
};

export default SearchResultPage;
