import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListDetailScreen = ({ route }) => {
  const { listId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Details</Text>
      <Text>List ID: {listId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ListDetailScreen;
