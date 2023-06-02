import React from "react";
import { Header } from "../components/Header";
import { Details } from "../components/Details";
import { List } from "../components/List";
import { ScrollView } from "react-native";

export const Basket = ({ top, detail, items }) => {
  return (
    <ScrollView>
      <Header {...top} />
      <Details {...detail} />
      <List {...items} />
    </ScrollView>
  );
};
