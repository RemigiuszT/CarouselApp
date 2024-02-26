import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { CardProps } from "../../types";
import { Footer } from "../Footer";
import { InnerCarousel } from "../InnerCarousel";
import { CardHeader } from "../CardHeader";
import { CardTitle } from "../CardTitle";
import { useCardActions } from "../../hooks/useCardActions";

const Card: React.FC<CardProps> = ({ data }) => {
  const {
    handleCardPress,
    handleHeartPress,
    handleInnerCarouselPress,
    handleChallengePress,
  } = useCardActions();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handleCardPress}
      activeOpacity={0.9}
    >
      <Image source={{ uri: data.image }} style={styles.fullImage} />
      <CardHeader onHeartPress={handleHeartPress} />
      <CardTitle title={data.title} tags={data.tags} />

      <InnerCarousel
        offers={data.offers}
        onPressItem={handleInnerCarouselPress}
      />

      <Footer onPress={handleChallengePress} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 328,
    height: 492,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FFF",
  },
  fullImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  headerText: {
    marginLeft: 8,
    fontFamily: "Proxima Nova",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 12,
    color: "#FFFFFF",
    textAlign: "left",
  },
  titleContainer: {
    paddingHorizontal: 16,
    marginTop: 200,
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 32,
    letterSpacing: -0.25,
    color: "#FFFFFF",
  },
  tagContainer: {
    flexDirection: "row",
    marginVertical: 4,
    flexWrap: "wrap",
  },
  tag: {
    fontFamily: "Proxima Nova",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.01,
    color: "#FFFFFFE0",
    marginRight: 4,
    textTransform: "uppercase",
  },
});

export default Card;
