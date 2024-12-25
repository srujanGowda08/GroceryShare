import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Add signup logic here
    console.log("Signup:", { email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
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
      <Button title="Signup" onPress={handleSignup} />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
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

export default SignupScreen;
