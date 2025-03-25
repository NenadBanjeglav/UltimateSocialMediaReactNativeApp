import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const PostDetails = () => {
  const { id } = useLocalSearchParams();
  return <Text>Post Details: {id}</Text>;
};

export default PostDetails;
