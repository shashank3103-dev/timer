import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAppTheme } from "../../resources/ThemeContext";
import LottieView from "lottie-react-native";
import { FONTS } from "../../resources";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const theme = useAppTheme();
    const navigation = useNavigation();

    useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("BOTTOM_TAB"); // 👈 change this if your screen name is different
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        },
        { backgroundColor: theme.COLORS.timerBackground },
      ]}
    >
      <Text
        style={[FONTS.h1, { color: theme.COLORS.timerBorder }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        Splash
      </Text>
    </SafeAreaView>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({});
