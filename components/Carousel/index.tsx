import React from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import Card from "../Card";
import { CarouselDataItem } from "../../types";

interface CarouselProps {
  data: CarouselDataItem[];
}

const { width } = Dimensions.get("window");

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      nestedScrollEnabled={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      snapToInterval={width}
      decelerationRate="fast"
      contentContainerStyle={styles.scrollViewContent}
    >
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <Card data={item} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  card: {
    width: 328,
    marginHorizontal: (width - 328) / 2,
    height: 492,
  },
});

export default Carousel;
