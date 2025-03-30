import React from "react";
import { Stack } from "expo-router";

const HomeStack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Feed" }} />
      <Stack.Screen name="post/[id]" options={{ title: "Post" }} />
    </Stack>
  );
};

export default HomeStack;
