import React from "react";
import { View, Image, StyleSheet } from "react-native";
function PostImage({ imageSource }) {
  return (
    <View style={styles.postContent}>
    <Image
      source={imageSource}
      style={{ width: "100%", height: "100%" }}
    />
      </View>
  );
}

const styles = StyleSheet.create({
    postContent: {
      flex: 4,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 5,
      marginTop: 15
    },
  });
  
export default PostImage;
