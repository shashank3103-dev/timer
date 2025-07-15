import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppTheme } from "../../resources/ThemeContext";
import CommonHeader from "../../components/CommonHeader";

const HistoryScreen = () => {
  const theme = useAppTheme();
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
        },
        { backgroundColor: theme.COLORS.background },
      ]}
    >
      <CommonHeader title={"History"}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      ></ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
