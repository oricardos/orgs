import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export const Details = ({
  name,
  farmLogo,
  farm,
  description,
  price,
  button,
}) => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.farmContent}>
          <Image source={farmLogo} style={styles.farmLogo} />
          <Text style={styles.farm}>{farm}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  name: {
    fontSize: 22,
    lineHeight: 42,
    fontFamily: "RubikBold",
  },
  farmContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 16,
  },
  farmLogo: {
    height: 50,
    width: 50,
    borderRadius: 200 / 2,
  },
  farm: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "RubikSemiBold",
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: "#c4c4c4",
    fontFamily: "RubikRegular",
  },
  price: {
    marginTop: 16,
    fontSize: 24,
    lineHeight: 48,
    color: "#2A9F85",
    alignSelf: "flex-end",
    fontFamily: "RubikSemiBold",
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    color: "#FFF",
    fontFamily: "RubikSemiBold",
  },
});
