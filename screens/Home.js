import { StyleSheet, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ width: 300, height: 70 }}>
        <Button
          title="Scan"
          onPress={() => navigation.navigate("Scanner")}
          color="#750000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffe3d0",
  },
});
