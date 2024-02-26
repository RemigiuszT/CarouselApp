import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import MainScreen from "./screens/mainScreen";
import * as Font from "expo-font";
import { useState } from "react";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      "Proxima Nova": require("./assets/fonts/ProximaNova.otf"),
      "Playfair Display": require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    });
    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    loadFonts();
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <MainScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
