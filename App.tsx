import "./global.css";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-2xl text-red-500 font-bold m-10 text-center">
        Open up App.tsx to start working on your app!
      </Text>

      <View className="w-24 h-24 bg-lime-200 border-2 border-pink-500 rounded-full"></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
