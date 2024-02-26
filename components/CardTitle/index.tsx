import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CardTitleProps {
  title: string;
  tags: string[];
}

export const CardTitle: React.FC<CardTitleProps> = ({ title, tags }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <Text style={styles.tag}>{tag}</Text>
            {index < tags.length - 1 && <Text style={styles.tag}> • </Text>}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
