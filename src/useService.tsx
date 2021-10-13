import * as React from "react";
import { LoadingStatusT } from "./StatusWrapper/type";

const useService = (service:() => Promise<any>) => {
  const [status, setLoadingStatus] = React.useState<LoadingStatusT>(
    LoadingStatusT.loading
  );

  const [data, setData] = React.useState<any>();

  React.useEffect(() => {
    let unmounted;
    service().then((d) => {
      setData(d);
      setLoadingStatus(LoadingStatusT.fetched);
    }).catch(() => {
      setData(null);
      setLoadingStatus(LoadingStatusT.failed);
    })
    return () => {
      unmounted = true;
    }
  }, [])

  return {
    status,
    data,
  }
}

export default useService;
