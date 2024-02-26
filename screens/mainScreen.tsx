import React from "react";
import { View, StyleSheet } from "react-native";
import Carousel from "../components/Carousel";
import { carouselData } from "../data";

const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Carousel data={carouselData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
