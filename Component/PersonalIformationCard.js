import React from "react";
import Card from "./Card";

export default function PersonalIformationCard(props) {
  return (
    <Card
      title="Thông tin cá nhân"
      imgSrc={require("../assets/info.png")}
      navigate={props.navigate}
      screen="CameraFront"
    />
  );
}
