import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import { Collapsible } from "@/components/Collapsible";
import coffee from "@/assets/images/coffeee.png";
const Explore = () => {
  return (
    <SafeAreaView>
    <View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "black", textAlign: "center", fontSize: 30 }}>
          Know more about us
        </Text>
      </View>
      <View
        style={{
          width: 300,
          backgroundColor: "grey",
          borderRadius: 60,
          marginTop: 20,
          marginLeft: 10,
          height:'100%',
          width:'100%'
        }}
      >
        <ImageBackground source={coffee} style={style.image}>
          <Collapsible title="Our Menu">
            <Text style={style.Text}>Coffee</Text>
            <Text style={style.Text}>Latte</Text>
            <Text style={style.Text}>Lemon Tea</Text>
          </Collapsible>
        </ImageBackground>
      </View>
    </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  Text: {
    color: "white",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    flex:1,
    resizeMode: "center",
    justifyContent: "center",
    alignItems:'center'
  },
});

export default Explore;
