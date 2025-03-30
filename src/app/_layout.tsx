import React from "react";
import "../../global.css";
import { Slot } from "expo-router";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { AuthProvider } from "@/providers/AuthProvider";

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: "#0A0A0A",
  },
};

const RootLayout = () => {
  return (
    <AuthProvider>
      <ThemeProvider value={CustomTheme}>
        <Slot />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default RootLayout;
