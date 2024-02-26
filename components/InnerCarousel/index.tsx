import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Offer } from "../../types";

interface InnerCarouselProps {
  offers: Offer[];
  onPressItem: () => void;
}

export const InnerCarousel: React.FC<InnerCarouselProps> = ({
  offers,
  onPressItem,
}) => {
  const renderTags = (tags: string[]) => {
    return tags.join(" • ").length > 30
      ? tags.join(" • ").substring(0, 30) + "..."
      : tags.join(" • ");
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      nestedScrollEnabled={true}
      snapToInterval={295 + 8}
      snapToAlignment="start"
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      style={styles.carousel}
    >
      {offers.map((offer) => (
        <TouchableOpacity
          key={offer.id}
          onPress={onPressItem}
          style={[
            styles.offerContainer,
            offer === offers[offers.length - 1]
              ? styles.lastOfferContainer
              : null,
          ]}
        >
          <Image source={{ uri: offer.image }} style={styles.offerImage} />
          <View style={styles.offerDetailsContainer}>
            <Text numberOfLines={1} style={styles.offerTags}>
              {renderTags(offer.tags)}
            </Text>
            <Text style={styles.offerTitle}>{offer.title}</Text>
            <Text style={styles.offerSubtitle}>{offer.subtitle}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: "100%",
    height: 96,
    marginTop: 8,
    borderRadius: 8,
    marginLeft: 16,
    paddingRight: 16,
  },
  offerContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    width: 295,
    height: 96,
    borderRadius: 12,
    shadowColor: "#565D62",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    marginRight: 8,
    overflow: "hidden",
  },
  offerImage: {
    width: 96,
    height: 96,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  offerDetailsContainer: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  offerTags: {
    fontSize: 12,
    color: "#DB6F57",
    marginBottom: 8,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.01,
    textTransform: "uppercase",
    height: 20,
  },
  offerTitle: {
    fontFamily: "Playfair Display",
    fontSize: 16,
    fontWeight: "700",
    color: "#565D62",
    lineHeight: 20,
    letterSpacing: -0.25,
    marginBottom: 4,
  },
  offerSubtitle: {
    fontSize: 16,
    color: "#565D62CC",
    lineHeight: 20,
    letterSpacing: -0.05,
    fontWeight: "400",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  lastOfferContainer: {
    marginRight: 22,
  },
});
