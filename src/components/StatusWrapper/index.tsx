import * as React from "react";
import {LoadingStatusT} from './type';

type Props = {
  status: LoadingStatusT;
};

const StatusWrapper: React.FC<Props> = ({ status, children }) => {
  switch (status) {
    case LoadingStatusT.loading:
      return <div>loading.....</div>;
    case LoadingStatusT.fetched:
      return <>{children}</>;
    case LoadingStatusT.failed:
      return <div>Internet Error</div>;
  }
};

export default StatusWrapper;
