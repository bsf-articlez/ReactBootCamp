import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { Icon } from "antd";
import "./styles.scss";

function ProfileImage({ src, icon, size = "3", ...rest }) {
  if (!/^([1-9]|10)$/.test(size)) {
    size = "x3";
  } else {
    size = "x" + size;
  }
  const [imageLoaded, setImageLoaded] = useState(null);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageLoaded(src);
    };
    image.onerror = () => {};
  }, []);
  return (
    <div className={classnames("imageWrapper", `${size}`)}>
      {imageLoaded ? (
        <img className="image" src={imageLoaded} />
      ) : (
        <div className="loading">
          <span>Loading...</span>
        </div>
      )}
      {icon && (
        <div className="icon">
          <Icon type="plus" />
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
