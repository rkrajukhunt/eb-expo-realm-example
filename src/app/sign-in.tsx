import { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { router } from "expo-router";

export default function SignIn({
  onLogin,
}: {
  onLogin: (loggedIn: boolean) => void;
}) {
  const navigation = useNavigation(); // Use the navigation hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ... previous code remains the same
  const handleLogin = () => {
    if (username === "user" && password === "password") {
      // onLogin(true); // Simulate login
      // navigation.navigate("root", {
      //   screen: "Home", // Navigate to the Home screen
      //   params: {
      //     name: "John Doe", // Pass a parameter
      //   },
      // });

      // navigation.navigate("HomeScreen");
      router.push("/home"); // Fixed the route name
    } else {
      alert("Invalid credentials!");
    }
  };

  // ... the rest of the component

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginTop: 20,
    width: "80%",
  },
});
