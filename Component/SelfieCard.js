import React from "react";
import Card from "./Card";
import CardAddImg from "./CardAddImg";

export default function SelfieCard(props) {
  const path = props.pathSelfie;
  const imgSrc = { uri: path };
  if (props.pathSelfie == null)
    return (
      <Card
        title="Ảnh tự chụp"
        imgSrc={require("../assets/selfie.png")}
        navigate={props.navigate}
        screen="CameraFront"
      />
    );
  else {
    return (
      <CardAddImg
        title="Ảnh tự chụp"
        imgSrc={require("../assets/selfie.png")}
        imgADD={imgSrc}
        navigate={props.navigate}
        screen="CameraFront"
      />
    );
  }
}
