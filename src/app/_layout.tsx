import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackVisible: false,
        gestureEnabled: true,
      }}
    ></Stack>
  );
}
