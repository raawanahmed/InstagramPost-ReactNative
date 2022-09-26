import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CircularImage from "./CircularImage";

import { Entypo } from "@expo/vector-icons";
function Header({ name, userName }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.imgWithText}>
        <CircularImage imageSource={require("../../assets/pp.jpg")} imageWidth={80} imageHeight={80} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>{userName}</Text>
        </View>
      </View>
      <Entypo name="dots-three-horizontal" size={25} color="black" style={{  marginRight: 15, marginTop:10}}/>
    </View>
  );
}
const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 10,
  },
  username: {
    fontSize: 15,
    marginLeft: 5,
    marginTop: 2,
    fontStyle: "italic",
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgWithText: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Header;
