import * as React from "react";

import services from "./services";
import StatusWrapper from "./components/StatusWrapper";
import useService from "./utils/useService";

import SearchResultPage from "./SearchResultPage";
import type { HotelInfoT } from "./services/type";

import { LoadingStatusT } from "./components/StatusWrapper/type";
import SiteHeader from "./components/SiteHeader";
const App: React.FC = () => {
  const {
    status,
    data,
  }: { status: LoadingStatusT; data: Array<HotelInfoT> } = useService(
    services.getHotelList
  );

  return (
    <>

      <div className="site-wrapper">
        <SiteHeader />
        <StatusWrapper status={status}>
          <SearchResultPage data={data} />
        </StatusWrapper>
      </div>
    </>
  );
};

export default App;
