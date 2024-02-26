import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
const arrowRightIcon = require("../../assets/arrow-right.png");
const playIcon = require("../../assets/play.png");

interface FooterProps {
  onPress: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.footer}>
      <View style={styles.headerLeft}>
        <Image source={playIcon} />
        <Text style={styles.footerText}>Rozpocznij wyzwanie</Text>
      </View>
      <Image source={arrowRightIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
  footerText: {
    marginLeft: 8,
    fontFamily: "Proxima Nova",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 20,
    color: "#FFFFFF",
    textAlign: "left",
  },
});
