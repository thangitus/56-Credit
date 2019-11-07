import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
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
    </View>
  );
}
const cardStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8
  },
  header: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    color: "#616A66",
    fontSize: 16,
    marginStart: 10
  },
  imgArrow: {
    width: 15,
    height: 15
  },
  icon: {
    width: 32,
    height: 32
  }
});
const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: 10,
    flex: 0.13,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16
  }
});
