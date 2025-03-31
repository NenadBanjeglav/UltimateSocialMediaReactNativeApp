import { Button, View } from "react-native";
import React from "react";
import { useAuth } from "@/providers/AuthProvider";

const Profile = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Button onPress={signOut} title="Sign Out" />
    </View>
  );
};

export default Profile;
