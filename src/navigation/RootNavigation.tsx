import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/splash/SplashScreen";
import BottomTab from "./BottomTab";
const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SPLASHSCREEN"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen
          name="SPLASHSCREEN"
          component={SplashScreen}
          options={{ headerShown: false, animation: "fade" }}
        />
        <RootStack.Screen name="BOTTOM_TAB" component={BottomTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
