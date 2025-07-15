import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useAppTheme } from "../../resources/ThemeContext";
import { ICONS } from "../../resources";
const HomeScreen = () => {
  const theme = useAppTheme();
  const [remaining, setRemaining] = useState(1 * 60);

  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isRunning && remaining > 0) {
      interval = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, remaining]);
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };
  const handlePlayPause = () => {
    setIsRunning((prev) => !prev);
  };
  const handleReset = () => {
    setIsRunning(false);
    setRemaining(25 * 60);
  };
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.COLORS.timerBackground },
      ]}
    >
      <View style={[styles.tagWrapper]}>
        <View
          style={[
            styles.focusTag,
            {
              backgroundColor: theme.COLORS.timerBackground,
              borderColor: theme.COLORS.timerBorder,
            },
          ]}
        >
          <Text
            style={[styles.focusTagText, { color: theme.COLORS.timerBorder }]}
          >
            Focus
          </Text>
        </View>
      </View>
      <View style={styles.timerDisplay}>
        <Text style={[styles.timerText, { color: theme.COLORS.timerBorder }]}>
          {formatTime(remaining).split(":")[0]}
        </Text>
        <Text style={[styles.timerText, { color: theme.COLORS.timerBorder }]}>
          {formatTime(remaining).split(":")[1]}
        </Text>
      </View>
      <View style={styles.controlsRow}>
        <TouchableOpacity
          style={[
            styles.smallBtn,
            { backgroundColor: theme.COLORS.timerBorder },
          ]}
          onPress={handleReset}
        >
          <Image
            style={{
              width: 24,
              height: 24,
              tintColor: theme.COLORS.timerBackground,
            }}
            source={ICONS.THREE_DOTS}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bigBtn} onPress={handlePlayPause}>
          {/* <Text style={styles.icon}>{isRunning ? '⏸' : '▶️'}</Text> */}
          <Image
            style={{
              width: 24,
              height: 24,
              tintColor: theme.COLORS.timerBackground,
            }}
            source={isRunning ? ICONS.PAUSE : ICONS.PLAY}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.smallBtn,
            { backgroundColor: theme.COLORS.timerBorder },
          ]}
          onPress={() => setRemaining((prev) => prev + 60)}
        >
          <Image
            style={{
              width: 24,
              height: 24,
              tintColor: theme.COLORS.timerBackground,
            }}
            source={ICONS.FAST_FORWARD}
          ></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  tagWrapper: {
    position: "absolute",
    top: 70,
  },
  focusTag: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  focusTagText: {
    fontSize: 16,
    fontWeight: "600",
  },
  timerDisplay: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 60,
  },
  timerText: {
    fontSize: 120,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  controlsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  smallBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  bigBtn: {
    backgroundColor: "#FF6A6A",
    padding: 25,
    borderRadius: 24,
  },
});
