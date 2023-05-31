import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import farm from "../../../assets/logo.png";

export const Details = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.name}>Cesta de Verduras</Text>
        <View style={styles.farmContent}>
          <Image source={farm} style={styles.farmLogo} />
          <Text style={styles.farm}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.description}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha.
        </Text>
        <Text style={styles.price}>R$40,00</Text>
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
    fontWeight: "bold",
  },
  farmContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  farmLogo: {
    height: 30,
    width: 30,
  },
  farm: {
    fontSize: 16,
    lineHeight: 26,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: "#c4c4c4",
  },
  price: {
    marginTop: 16,
    fontSize: 24,
    lineHeight: 48,
    color: "#2A9F85",
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});
