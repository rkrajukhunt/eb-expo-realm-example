import { RealmProvider } from "@realm/react";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackVisible: false,
        gestureEnabled: true,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Sign In",
        }}
      />

      <RealmProvider>
        <Stack.Screen
          name="example"
          options={{
            headerShown: false,
            title: "RealM DB",
          }}
        />
      </RealmProvider>

      <Stack.Screen name="(app)" options={{ headerShown: false }} />
    </Stack>
  );
}
