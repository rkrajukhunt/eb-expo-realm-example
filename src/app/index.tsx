import { useEffect } from "react";
import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Index() {
  useEffect(() => {
    // Navigate to /sign-in after the component mounts
    const timer = setTimeout(() => {
      router.push("/sign-in");
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
