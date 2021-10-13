import * as React from "react";
import { LoadingStatusT } from "./StatusWrapper/type";

const useService = (service: (params?: any) => Promise<any>, params?: any) => {
  const [status, setLoadingStatus] = React.useState<LoadingStatusT>(
    LoadingStatusT.loading
  );

  const [data, setData] = React.useState<any>();

  React.useEffect(() => {
    service(params)
      .then((d) => {
        setData(d);
        setLoadingStatus(LoadingStatusT.fetched);
      })
      .catch(() => {
        setData(null);
        setLoadingStatus(LoadingStatusT.failed);
      });
  }, [service, params]);

  return {
    status,
    data,
  };
};

export default useService;
