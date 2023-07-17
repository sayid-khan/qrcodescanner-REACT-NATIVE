import { StyleSheet, Text, View, Linking, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Scanner() {
  const [hasPermission, sethasPermission] = useState(null);
  const [scanned, setscanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      sethasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setscanned(true);
    alert(
      `Bar Code With Type ${type} And Data ${Linking.openURL(
        `${data}`
      )} Has Been Scanned.`
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting For The Permission.</Text>;
  }
  if (hasPermission === false) {
    return <Text>No Access To Camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title="Tap To Scan Again" onPress={() => setscanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1A322",
  },
});
