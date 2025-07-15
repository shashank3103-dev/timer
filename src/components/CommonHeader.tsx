
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useAppTheme } from "../resources/ThemeContext";
import { FONTS, ICONS } from "../resources";

// import { useAppTheme } from "../resources/ThemeContext";
// import { FONTS, ICONS, SHADOW } from "../resources";


const CommonHeader = ({
  title,
  onBackPress,
  showBack = true,
}: {
  title: string;
  onBackPress?: () => void;
  showBack?: boolean;
}) => {
  const theme = useAppTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.COLORS.background,
          borderBottomColor: theme.COLORS.card || "#ccc",
          
        },
      ]}
    >
      {showBack ? (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image
            source={ICONS.HISTORY} // Make sure to define this in your ICONS
            style={[
              styles.backIcon,
              {
                tintColor: theme.COLORS.text,
              },
            ]}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.spacer} />
      )}
      <Text
        style={[
          FONTS.h3,
          {
            color: theme.COLORS.text,
            // textAlign: "center",
            flex: 1,
          },
        ]}
      >
        {title}
      </Text>
      <View style={styles.spacer} />
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
   
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  spacer: {
    width: 32,
  },
});