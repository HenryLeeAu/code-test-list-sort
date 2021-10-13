import * as React from "react";
import {LoadingStatusT} from './type';

type Props = {
  status: LoadingStatusT;
  message: string,
};

const StatusWrapper: React.FC<Props> = ({ status, children, message }) => {
  switch (status) {
    case LoadingStatusT.loading:
      return <div>loading.....</div>;
    case LoadingStatusT.success:
      return <>{children}</>;
    case LoadingStatusT.failed:
      return <div>{message}</div>;
    case LoadingStatusT.idle:
      return null;
  }
};

export default StatusWrapper;
