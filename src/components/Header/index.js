import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";
import topo from '../../../assets/topo.png'

const width = Dimensions.get("screen").width;

export const Header = () => {
    return (
        <>
      <Image style={styles.img} source={topo} />
      <Text style={styles.title}>Detalhe da Cesta</Text>
    </>
    )
}

const styles = StyleSheet.create({
    img: {
      width: "100%",
      height: (578 / 768) * width, // altura / largura * width
    },
    title: {
      position: 'absolute',
      width: '100%',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: '#fff',
      fontWeight: 'bold',
      marginTop: 16,
    }
  });