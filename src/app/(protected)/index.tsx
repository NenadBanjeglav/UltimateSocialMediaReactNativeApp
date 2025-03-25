import FeedPostItem from "@/components/FeedPostItem";
import { FlatList } from "react-native";
import dummyPosts from "@/dummyPosts";
import { Link } from "expo-router";

export default function App() {
  return (
    <FlatList
      data={dummyPosts}
      renderItem={({ item }) => (
        <Link href={`/post/${item.id}`}>
          <FeedPostItem post={item} />
        </Link>
      )}
    />
  );
}
