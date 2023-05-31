import React from "react";
import { Header } from "../components/Header";
import { Details } from "../components/Details";

export const Basket = ({top, detail}) => {
  return (
    <>
      <Header {...top} />
      <Details {...detail} />
    </>
  );
};
