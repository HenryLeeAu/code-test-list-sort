import * as React from "react";
import type { HotelInfoT } from "../services/type";
import Card from "./Card";

type Props = {
  data: Array<HotelInfoT>;
};

const SearchResultPage: React.FC<Props> = ({ data }) => {
  const [sortBy, setSortBy] = React.useState<string>();
  return (
    <div data-testid="search-result-page">
      {data.map((hotelInfo) => (
        <Card
          key={hotelInfo.id}
          hotelInfo={hotelInfo}
        />
      ))}
    </div>
  );
};

export default SearchResultPage;
