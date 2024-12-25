import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login logic here
    if (email && password) {
      console.log("Login successful:", { email, password });
      navigation.navigate("Lists"); // Navigate to ListsScreen
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate("Signup")}
        style={styles.secondaryButton}
        textStyle={styles.secondaryButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: "transparent",
  },
  secondaryButtonText: {
    color: "#007BFF",
  },
});

export default LoginScreen;
