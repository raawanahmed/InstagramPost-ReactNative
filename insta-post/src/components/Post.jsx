import { StyleSheet, View} from "react-native";
import Footer from "./Footer"
import Header from "./Header";
import PostImage from "./PostImage";

const Post = () => {
  return (
    <>
      <View style={styles.post}>
        <Header userName="Rawanahmed" name="Rawan Ahmed" />
        <PostImage imageSource={require("../../assets/post.jpg")} />
        <Footer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 12,
    padding: 10,
  },
});
export default Post;
