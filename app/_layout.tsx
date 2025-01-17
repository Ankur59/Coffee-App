import React from "react";
import { Stack } from "expo-router";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";

const Layout = () => {
  const Preferences = Appearance.getColorScheme();
  const theme = Preferences === "dark" ? Colors.dark : Colors.light;
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.backgroundcolor },
        headerTintColor: theme.text,
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Store",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="explore"
        options={{
          headerShown: true,
          title: "About_us",
          headerTitle: "abbb",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="menu"
        options={{
          headerShown: true,
          title: "Our menu",
          headerTitle: "Our menu",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="+not-found"
        options={{
          headerShown: true,
          title: "Not found",
          headerTitle: "not found",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default Layout;
