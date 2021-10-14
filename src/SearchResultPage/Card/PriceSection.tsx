import * as React from "react";
import "./PriceSection.scss";

type Props = {
  currency: string;
  totalAmount: number;
  saveAmount?: number;
};

const PriceSection: React.FC<Props> = ({
  currency,
  totalAmount,
  saveAmount,
}) => (
  <div className="price-section">
    <div className="price-title">
      <strong>1</strong> night total ({currency})
    </div>
    <div>
      <span className="currency-symbol">$</span>
      <span className="total-amount">{totalAmount}</span>
    </div>
    <div className="save-amount">
      {saveAmount && (
        <>
          Save ${saveAmount}
          <span className="end-symbol">~</span>
        </>
      )}
    </div>
  </div>
);

export default React.memo(PriceSection);
