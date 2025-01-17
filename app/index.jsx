import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import icedcoffee from "@/assets/images/iced-coffee.png";

const App = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={icedcoffee}
        resizeMode="cover"
        style={style.image}
      >
        <Text style={style.text}>Coffee store</Text>
        <Link
          href={"/menu"}
          style={{
            
          }}
          asChild
        >
          <Pressable style={style.button}>
            <Text style={style.btn_txt}>Menu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
    alignItems:'center'
  },
  text: {
    fontSize: 45,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    width: "100%",
  },
  button: {
    textAlign: "center",
    backgroundColor: "blue",
    padding: 10,
    width: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btn_txt: {
    fontSize: 20,
    color: "white",
  },
});

export default App;
