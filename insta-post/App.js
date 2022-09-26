import { StyleSheet, View } from "react-native";
import Post from "./src/components/Post";
export default function App() {
  return (
    <View style={styles.container}>
      <Post />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
