import { Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";

const NewPost = () => {
  const [content, setContent] = useState("");

  const handleCreatePost = () => {
    // send post to the be

    setContent("");
    router.back();
  };

  return (
    <View className="flex-1 p-4">
      <Stack.Screen
        options={{
          headerLeft: () => <Text onPress={() => router.back()}>Cancel</Text>,
          headerRight: () => (
            <Button
              title="Post"
              disabled={content.trim().length === 0}
              onPress={handleCreatePost}
            />
          ),
        }}
      />
      <TextInput
        className="text-lg min-h-40"
        multiline
        placeholder="What's happening?"
        onChangeText={setContent}
        autoFocus
      />
    </View>
  );
};

export default NewPost;
