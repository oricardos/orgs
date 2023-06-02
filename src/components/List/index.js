import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const List = ({ title, list }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>

      {list.map(({ name, image }) => {
        return (
          <View key={name} style={styles.item}>
            <Image source={image} style={styles.image} />
            <Text style={styles.itemName}>{name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "RubikSemiBold",
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
  },
  image: {
    height: 46,
    width: 46,
  },
  itemName: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "RubikRegular",
    color: "#464646",
  },
});
