import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IdentificationCard from "../Component/IdentificationCard";
import SelfieCard from "../Component/SelfieCard";
import PersonalIformationCard from "../Component/PersonalIformationCard";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    AsyncStorage.clear()
    this.state = {
      pathCMND: null,
      pathSelfie: null
    };
    AsyncStorage.setItem("pathCMND", null);
    AsyncStorage.setItem("pathSelfie", null);
  }
  navigate = screen => {
    this.props.navigation.navigate(screen);
  };

  componentDidMount = async () => {
    const uriCMND = await this.props.navigation.getParam("uriCMND", null);
    if (uriCMND) {
      const uriSelfie = await AsyncStorage.getItem("pathSelfie");
      AsyncStorage.mergeItem("pathCMND", uriCMND);
      this.setState({
        pathCMND: uriCMND,
        pathSelfie: uriSelfie
      });
    }

    const uriSelfie = await this.props.navigation.getParam("uriSelfie", null);
    if (uriSelfie) {
      const uriCMND = await AsyncStorage.getItem("pathCMND");
      console.log("uriCMND: " + uriCMND);
      AsyncStorage.mergeItem("pathSelfie", uriSelfie);
      this.setState({
        pathCMND: uriCMND,
        pathSelfie: uriSelfie
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#24D0B1", "#22E794"]}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.header}
        >
          <Text style={styles.title}>Thông tin</Text>
        </LinearGradient>
        <ScrollView
          style={{
            flex: 0.78
          }}
        >
          <IdentificationCard
            navigate={this.navigate}
            pathCMND={this.state.pathCMND}
          />

          <SelfieCard
            navigate={this.navigate}
            pathSelfie={this.state.pathSelfie}
          />

          <PersonalIformationCard navigate={this.navigate} />
        </ScrollView>
        <TouchableOpacity style={styles.buttonContainer}>
          <LinearGradient
            colors={["#21B69B", "#1DD185"]}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.buttonGradient}
          >
            <Text style={styles.send}>Gửi</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4"
  },
  header: {
    flex: 0.12,
    paddingTop: 20,
    paddingStart: 25,
    alignItems: "flex-start"
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "500"
  },
  send: {
    fontSize: 20,
    color: "white",
    fontWeight: "500"
  },
  icon: {
    flex: 0.5,
    backgroundColor: "white"
  },
  buttonContainer: {
    marginHorizontal: 40,
    marginBottom: 20,
    marginTop: 20,
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

HomeScreen.navigationOptions = {
  header: null
};
