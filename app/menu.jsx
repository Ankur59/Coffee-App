import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { Colors } from "../constants/Colors";
import { Appearance } from "react-native";
import React from "react";
import { MENU_ITEMS } from "../constants/menu";
import menu_img from "../constants/menu_img";

export default function Menuscreen() {
  const preference = Appearance.getColorScheme();
  const theme = preference === "dark" ? Colors.dark : Colors.light;

  const Platform_comp = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const styles = createstyle(theme, preference);
  const seperator_comp = <View style={styles.seperator}></View>;
  //   const header=<Text>Start of the list</Text>
  const footer = (
    <Text style={[styles.footer, { textAlign: "center" }]}>
      End of the list
    </Text>
  );
  return (
    <Platform_comp>
      <FlatList
        data={MENU_ITEMS}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={seperator_comp}
        // ListHeaderComponent={header}
        ListFooterComponent={footer}
        ListFooterComponentStyle={styles.footer}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.innervw}>
              <Text style={styles.item_title}>{item.title}</Text>
              <Text style={styles.item_desc }>{item.description}</Text>
            </View>
            <Image
              source={menu_img[item.id - 1]}
              style={{ width:100,height:100,resizeMode:"center" }}
            />
          </View>
        )}
      />
    </Platform_comp>
  );
}

function createstyle(theme, preference) {
  return StyleSheet.create({
    container: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.backgroundcolor, // Dynamically apply theme
    },
    seperator: {
      height: 1,
      backgroundColor: preference === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: "300",
      marginHorizontal: "auto",
      marginBottom: 10,
    },
    footer: {
      marginHorizontal: "auto",
      color: preference === "dark" ? "white" : "black",
      textAlign: "center" 
    },
    row: {
      flex: 1,
      backgroundColor: preference === "dark" ? "black" : "white",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      height: 100,
      overflow: "hidden",
      borderColor: "#6F4E37",
      borderWidth: 2,
      marginBottom: 10,
      maxWidth: 600,
      borderRadius: 20,
    },
    innervw: {
      paddingLeft: 10,
      paddingRight: 30,
      flexGrow: 1,
    },
    item_title: {
      textDecorationLine:"underline",
      fontSize: 18,
      color: preference === "dark" ? "white" : "black",
    },
    item_desc: {
      color:preference==="dark"?"white":"black",
    },
  });
}
