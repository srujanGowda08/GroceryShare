import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RecipeCard from "../../components/recipes/RecipeCard";

const RecipesScreen = ({ recipes }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
      />
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

export default RecipesScreen;
