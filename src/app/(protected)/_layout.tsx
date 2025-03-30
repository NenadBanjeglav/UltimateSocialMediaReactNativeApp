import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";
import { ActivityIndicator } from "react-native";

const ProtectedLayout = () => {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href={"/sign-in"} />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProtectedLayout;
