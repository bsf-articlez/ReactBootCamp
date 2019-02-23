import React, { useEffect, useState } from "react";
import "./styles.scss";

function ProfileImage({ src, icon, size = "medium", ...rest }) {
  if (!/^(small|medium|large)$/.test(size)) {
    size = "medium";
  }
  const [imageLoaded, setImageLoaded] = useState(null);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {};
    image.onerror = () => {};
  });
  return (
    <div className={`imageWarpper ${size}`}>
      {imageLoaded ? <image src={imageLoaded} /> : <div>Loading...</div>}
    </div>
  );
}

export default ProfileImage;
