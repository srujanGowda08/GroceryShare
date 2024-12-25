import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListCard from "../../components/lists/ListCard";

const ListsScreen = ({ navigation }) => {
  const lists = [
    { id: 1, title: "Grocery List", description: "Milk, Bread, Eggs, etc." },
    {
      id: 2,
      title: "Work Tasks",
      description: "Complete report, Team meeting",
    },
  ];

  const handlePress = (id) => {
    navigation.navigate("ListDetail", { id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListCard
            title={item.title}
            description={item.description}
            onPress={() => handlePress(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ListsScreen;
