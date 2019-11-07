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
      type: Camera.Constants.Type.back
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
    await ScreenOrientation.lockAsync(
      ScreenOrientation.Orientation.LANDSCAPE_LEFT
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1 };
      const data = await this.camera.takePictureAsync(options);
      await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
      console.log("CMND: " + data.uri);
      this.props.navigation.navigate("Home", { uriCMND: data.uri });
      // UploadImg(data);
    }
  };

  navigate = async screen => {
    await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
    this.props.navigation.navigate(screen);
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
          <View style={styles.cameraContainer}>
            <View style={styles.titleConainer}>
              <TouchableOpacity onPress={() => this.navigate("Home", null)}>
                <Image
                  source={require("../assets/ic_close.png")}
                  resizeMode="contain"
                  style={styles.imgClose}
                />
              </TouchableOpacity>

              <Text style={styles.title} numberOfLines={1}>
                Căn chỉnh mặt trước thẻ CMND của bạn vào ô bên và chụp ảnh
              </Text>
            </View>
            <Camera
              style={styles.camera}
              type={this.state.type}
              ref={ref => {
                this.camera = ref;
              }}
            />
          </View>

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
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  cameraContainer: {
    flex: 0.9,
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  camera: {
    flex: 0.9
  },
  titleConainer: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 10,
    flex: 0.1,
    flexDirection: "row"
  },
  title: {
    color: "black",
    textAlign: "center"
  },
  imgClose: {
    width: 15,
    height: 15
  },
  image: {
    width: 70,
    height: 70
  },
  button: {
    flex: 0.1,
    alignSelf: "center",
    marginEnd: 20
  }
});
