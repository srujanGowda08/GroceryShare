import React from "react";
import { FlatList } from "react-native";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onRecipePress }) => {
  const renderItem = ({ item }) => (
    <RecipeCard
      title={item.title}
      summary={item.summary}
      onPress={() => onRecipePress(item.id)}
    />
  );

  return (
    <FlatList
      data={recipes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default RecipeList;
