import * as React from "react";

import services from "./services";
import StatusWrapper from "./StatusWrapper";
import useService from "./useService";

import SearchResultPage from "./SearchResultPage";
import type { HotelInfoT } from "./services/type";

import { LoadingStatusT } from "./StatusWrapper/type";

const App: React.FC = () => {
  const {
    status,
    data,
  }: { status: LoadingStatusT; data: Array<HotelInfoT> } = useService(
    services.getHotelList
  );

  return (
    <StatusWrapper status={status} message={"error"}>
      <SearchResultPage data={data} />
    </StatusWrapper>
  );
};

export default App;
