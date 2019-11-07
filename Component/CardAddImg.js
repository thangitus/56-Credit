import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function CardAddImg(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={props.imgSrc} resizeMode="contain" style={styles.icon} />
        <Text style={styles.title}>{props.title}</Text>
      </View>

      <View style={styles.imgContainer}>
        <Image
          source={props.imgADD}
          resizeMode="contain"
          style={styles.imgADD}
        />
        <TouchableOpacity
          style={styles.reCaptureButton}
          onPress={() => props.navigate(props.screen)}
        >
          <Text style={styles.reCaptureTitle}>Chụp lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 20,
    paddingBottom: 10,
    paddingTop: 10,
    paddingStart: 20,
    paddingEnd: 10
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
  imgADD: {
    width: 200,
    height: 140
  },
  icon: {
    width: 40,
    height: 40
  },
  imgContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100%"
  },
  reCaptureTitle: {
    color: "#2CE58C",
    fontSize: 15,
    fontWeight: "500"
  },
  reCaptureButton: {
    alignSelf: "flex-end",
    marginBottom: 15,
    marginEnd: 15
  }
});
