import FeedPostItem from "@/components/FeedPostItem";
import dummyPosts from "@/dummyPosts";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const PostDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const post = dummyPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <Text>Post Not Found</Text>;
  }
  return <FeedPostItem post={post} />;
};

export default PostDetails;
