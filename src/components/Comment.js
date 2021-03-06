import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Block, Card, Icon } from "galio-framework";
import Stars from "./Stars";

import theme from '../theme';


export default function Comment({ body, date, email, fullName, stars}) {

  return (
    <View>
      <View style={styles.vistaComentarios}>
        <View>
          <View style={styles.innerContainer}><Stars key={body} cant={stars}/></View>
          <Text style={styles.infoUser}>{fullName} ({email})</Text>
          <Text style={styles.infoDate}>{date}</Text>
        </View>
      </View>
      <View style={styles.textoComentario}>
        <Text>{body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  vistaComentarios: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
  },
  innerContainer: {
    marginLeft:10,
    flexDirection: "row",
    alignItems: "center",
  },
  infoUser: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#2D48B6",
  },
  infoDate: {
    fontSize: 13,
    marginLeft: 10,
  },
  textoComentario: {
    marginLeft: 30,
    fontSize: 22,
    marginTop: 5,
    fontStyle: "italic",
  },
  iconStarFilled: {
    color: "#FFB300",
  },
});
