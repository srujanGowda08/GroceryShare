import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListCard = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ListCard;
