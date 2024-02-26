import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const sunIcon = require("../../assets/sun.png");
const heartIcon = require("../../assets/heart.png");

interface CardHeaderProps {
  onHeartPress: () => void;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ onHeartPress }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image source={sunIcon} style={styles.icon} />
        <Text style={styles.headerText}>Wzmacnianie</Text>
      </View>
      <TouchableOpacity onPress={onHeartPress}>
        <Image source={heartIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
