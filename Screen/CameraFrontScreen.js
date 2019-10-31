import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar
} from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { ScreenOrientation } from "expo";

import UploadImg from "../src/API/UploadImg";

export default class CameraBackScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,
      pathCMND: null
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
    await ScreenOrientation.allowAsync(
      ScreenOrientation.Orientation.PORTRAIT
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1 };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.setState({ pathCMND: data.uri, openCamera: false });
      UploadImg(data);
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
            <Camera
              style={styles.camera}
              type={this.state.type}
              ref={ref => {
                this.camera = ref;
              }}
            />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.takePicture()}
          >
            <Image
              source={require("../assets/camera.png")}
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center"
  },
  camera: {
    flex: 0.9,
  },
  image: {
    width: 70,
    height: 70
  },
  button: {
    flex: 0.1,
    alignSelf: "center",
    marginBottom: 30
  }
});
