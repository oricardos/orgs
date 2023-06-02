import React from "react";
import { Header } from "../components/Header";
import { Details } from "../components/Details";
import { List } from "../components/List";
import { FlatList, Text, StyleSheet} from "react-native";

export const Basket = ({ top, detail, items }) => {
  return (
    <>

      <FlatList 
      data={items.list} 
      renderItem={List} 
      keyExtractor={({ name }) => name} 
      ListHeaderComponent={() => {
        return <>
          <Header {...top} />
          <Details {...detail} />
          <Text style={styles.title}>{items.title}</Text>
        </>
      }} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "RubikSemiBold",

    paddingVertical: 16,
    paddingHorizontal: 24,
  },
})
