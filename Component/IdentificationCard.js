import React from "react";
import Card from "./Card";
import CardAddImg from './CardAddImg'
export default function IdentificationCard(props) {
  const path = props.pathCMND;
  const imgSrc = { uri: path };
  if (props.pathCMND == null)
    return (
      <Card
        title="Chứng minh nhân dân"
        imgSrc={require("../assets/cmnd.png")}
        navigate={props.navigate}
        screen="CameraBack"
      />
    );
  else {
    return (
      <CardAddImg
        title="Chứng minh nhân dân"
        imgSrc={require("../assets/cmnd.png")}
        imgADD={imgSrc}
        navigate={props.navigate}
        screen="CameraBack"
      />
    );
  }
}
