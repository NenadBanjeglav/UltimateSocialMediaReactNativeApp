import React from "react";
import { Redirect, Slot } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";
import { ActivityIndicator } from "react-native";

const AuthLayout = () => {
  const { isLoading, session } = useAuth();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (session) {
    return <Redirect href={"/"} />;
  }

  return <Slot />;
};

export default AuthLayout;
