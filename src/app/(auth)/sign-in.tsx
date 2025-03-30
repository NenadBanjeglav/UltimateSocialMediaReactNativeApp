import { Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";

const SignIn = () => {
  const { signIn } = useAuth();
  const [username, setUsername] = useState("");

  const handleSignIn = () => {
    signIn(username);
  };

  return (
    <View className="flex-1 bg-white items-center justify-center w-full max-w-md mx-auto">
      <Text className="text-2xl mb-5">Sign in</Text>
      <TextInput
        className="w-4/5 h-12 border border-gray-300 rounded px-2.5 mb-4 "
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
