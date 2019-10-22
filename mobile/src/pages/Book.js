import React from "react";
import { SafeAreaView, AsyncStorage, Text, StyleSheet } from "react-native";

export default function Book({ navigation }) {
  const id = navigation.getParam("id");
  return (
    <SafeAreaView>
      <Text>{id}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 32,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginTop: 15
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15
  }
})