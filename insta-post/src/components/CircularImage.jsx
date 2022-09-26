import React from "react";
import { Image } from "react-native";
function CircularImage({ imageSource, imageWidth, imageHeight }) {
  return (
    <Image
      source={imageSource}
      style={{ width: imageWidth, height: imageHeight, borderRadius: "50%", margin: 10 }}
    />
  );
}
export default CircularImage;
