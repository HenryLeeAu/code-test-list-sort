import * as React from "react";

import "./ImageSection.scss";

type Props = {
  title: string,
  url: string,
  caption: string,
};

const ImageSection: React.FC<Props> = ({
  title,
  url,
  caption
 }) => (
  <div className="image-section">
    <div className="badge">
      {title}
    </div>
    <img
      src={url}
      alt={caption}
    />
  </div>
);

export default React.memo(ImageSection);
