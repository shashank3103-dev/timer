import * as React from "react";
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ICONS, SHADOW, SHADOW_BLUE } from "../resources";
import { useAppTheme } from "../resources/ThemeContext";
import HomeScreen from "../screens/home/HomeScreen";
import HistoryScreen from "../screens/history/HistoryScreen";

function getIcons(routeName: string) {
  switch (routeName) {
    case "Timer":
      return ICONS.HOME;
    case "History":
      return ICONS.HISTORY;
    
    default:
      return ICONS.HOME;
  }
}

function MyTabBar({ state, descriptors, navigation }: any) {
  const theme = useAppTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: Platform.OS === "ios" ? "5%" : "3%",
        paddingHorizontal: "6%",
        backgroundColor: theme.COLORS.timerBackground,
        justifyContent: "space-between",
      
       
      }}
    >
      {state.routes.map(
        (route: { key: string | number; name: string }, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 5,
                // backgroundColor: isFocused
              }}
            >
              <Image
                source={getIcons(route.name)}
                style={{
                  height: 22,
                  width: 22,
                  tintColor: isFocused
                    ? theme.COLORS.timerBorder
                    : theme.COLORS.gray,
                }}
              />
              <Text
                style={{
                  marginTop: 4,
                  color: isFocused ? theme.COLORS.timerBorder : theme.COLORS.gray,
                  fontSize: isFocused ? 14 : 12,
                  fontWeight: isFocused ? "600" : "400",
                  fontFamily: isFocused
                    ? "Quicksand-SemiBold"
                    : "Quicksand-Regular",
                  textAlign: "center",
                }}
              >
                {label.replace("Navigation", "")}
              </Text>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
      tabBar={(props: any) => <MyTabBar {...props} />}
    >
    
      <Tab.Screen name="Timer" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}