import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppTheme } from "../../resources/ThemeContext";
import LottieView from "lottie-react-native";

const SplashScreen = () => {
  const theme = useAppTheme();
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        },
        { backgroundColor: theme.COLORS.background },
      ]}
    >
      <LottieView
        source={require("../../assets/anim/Clocktimer.json")}
        autoPlay
        loop
        style={{
          width: 250,
          height: 250,
        }}
      />
    </SafeAreaView>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({});
