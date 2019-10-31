import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class HomeScreen extends React.Component {
  navigate = screen => {
    this.props.navigation.navigate(screen);
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

        <View style={styles.card}>
          <InspectionCard
            title="Chứng minh nhân dân"
            imgSrc={require("../assets/cmnd.png")}
            navigate={this.navigate}
            screen='Camera'
          />
        </View>

        <View style={styles.card}>
          <InspectionCard
            title="Ảnh tự chụp"
            imgSrc={require("../assets/selfie.png")}
          />
        </View>
        <View style={styles.card}>
          <InspectionCard
            title="Thông tin cá nhân"
            imgSrc={require("../assets/info.png")}
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <LinearGradient
            colors={["#21B69B", "#1DD185"]}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.buttonGradient}
          >
            <Text style={styles.title}>Gửi</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

function InspectionCard(props) {
  return (
    <TouchableOpacity
      style={cardStyle.container}
      onPress={() => props.navigate(props.screen)}
    >
      <View style={cardStyle.header}>
        <Image
          source={props.imgSrc}
          resizeMode="contain"
          style={cardStyle.icon}
        />

        <Text style={cardStyle.title}>{props.title}</Text>
      </View>

      <View>
        <Image
          source={require("../assets/arrow.png")}
          resizeMode="contain"
          style={cardStyle.imgArrow}
        />
      </View>
    </TouchableOpacity>
  );
}
const cardStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  header: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    color: "#616A66",
    fontSize: 18,
    marginStart: 10
  },
  imgArrow: {
    width: 15,
    height: 15
  },
  icon: {
    width: 40,
    height: 40
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4"
  },
  header: {
    flex: 0.08,
    paddingTop: 40,
    paddingStart: 25,
    alignItems: "flex-start"
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "500"
  },
  icon: {
    flex: 0.5,
    backgroundColor: "white"
  },
  card: {
    marginTop: 20,
    marginHorizontal: 10,
    flex: 0.13,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10
  },
  buttonContainer: {
    marginTop: 20,
    flex: 0.12,
    marginHorizontal: 10
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
