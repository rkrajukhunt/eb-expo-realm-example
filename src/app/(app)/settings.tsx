import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const settingsOptions = [
    { title: "WiFi", key: "wifi" },
    { title: "Sound", key: "sound" },
    { title: "Some more setting", key: "more" },
  ];

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => router.replace("/") },
    ]);
  };

  const renderSettingItem = ({ item }: { item: { title: string } }) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={() => Alert.alert(item.title)}
    >
      <Text style={styles.settingText}>{item.title}</Text>
      <Text style={styles.arrow}>{">"}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={settingsOptions}
        renderItem={renderSettingItem}
        keyExtractor={(item) => item.key}
        style={styles.list}
      />
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FA",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
  },
  list: {
    marginTop: 10,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
  },
  settingText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  arrow: {
    fontSize: 20,
    color: "#B0B0B0",
  },
  logoutButton: {
    marginBottom: 10,
    marginTop: 35,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#FF4D4D",
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
