import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLike: false };
  }
  onPress = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
    console.log("You pressed on like.")
  };

  render() {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={this.onPress}>
            <AntDesign
              name={this.state.isLike ? "heart" : "hearto"}
              size={30}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
          <Ionicons
            name="chatbox-outline"
            size={30}
            color="black"
            style={styles.icon}
          />
          <AntDesign
            name="export"
            size={30}
            color="black"
            style={styles.icon}
          />
        </View>

        <Ionicons
          name="ios-bookmark-outline"
          size={30}
          color="black"
          style={styles.icon}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    marginHorizontal: 15,
    marginRight: 15,
  },
  leftIcons: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Footer;
