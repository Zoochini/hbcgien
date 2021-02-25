import React, { Component } from "react";
import { Page, Document, Text, View } from "@react-pdf/renderer";

export class PDFCommande extends Component {
  render() {
    let { commande, coordonnes } = this.props;
    let styles = {
      body: {
        fontFamily: "Helvetica",
        fontSize: 14,
        padding: 15,
        textAlign: "justify",
      },
      title: {
        width: "100%",
        textAlign: "center",

        margin: 15,
      },
      container: {
        display: "flex",
        marginBottom: 10,
      },
      item: {
        display: "inline-block",
        marginBottom: 2,
      },
      table: {
        margin: 10,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "flex-start",
        borderTop: 1,
        borderRight: 1,
      },
      tableRow: {
        display: "flex",
        flexDirection: "column",
        borderLeft: 1,
        flexGrow: 1,
      },
      tableCell: {
        padding: 5,
        display: "flex",
        justifyContent: "space-around",
        borderBottom: 1,
        flexGrow: 1,
      },
      tableHeader: {
        fontFamily: "Helvetica-Bold",
        padding: 5,
        display: "flex",
        justifyContent: "space-around",
        borderBottom: 1,
        flexGrow: 1,
      },
    };
    let total = 0;
    commande.map((v)=> { return total += v.prix * v.quantite});
    let date = new Date(Date.now());
    return (
      <Document>
        <Page style={styles.body}>
          <View style={styles.title}>
            <Text>- Bon de commande -</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.item}>Nom : {coordonnes.nom}</Text>
            <Text style={styles.item}>Prenom : {coordonnes.prenom}</Text>
            <Text style={styles.item}>Adresse: {coordonnes.adresse}</Text>
            <Text style={styles.item}>CP/Ville : {coordonnes.cp} {coordonnes.ville}</Text>
            <Text style={styles.item}>Téléphone : {coordonnes.telephone}</Text>
            <Text style={styles.item}>Email : {coordonnes.email}</Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Taille</Text>
              {commande.map((v) => {
                return <Text style={styles.tableCell}>{v.taille === "" ? " " : v.taille}</Text>;
              })}
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Produits</Text>
              {commande.map((v) => {
                return <Text style={styles.tableCell}>{v.nom}</Text>;
              })}
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Quantité</Text>
              {commande.map((v) => {
                return <Text style={styles.tableCell}>{v.quantite}</Text>;
              })}
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Prix unitaire</Text>
              {commande.map((v) => {
                return <Text style={styles.tableCell}>{v.prix}</Text>;
              })}
              <Text style={styles.tableHeader}>Total</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Total</Text>
              {commande.map((v) => {
                return (
                  <Text style={styles.tableCell}>{v.quantite * v.prix}</Text>
                );
              })}
              <Text style={styles.tableCell}>{total}</Text> 
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.item}>Date : {date.getDate()} / {date.getMonth()} / {date.getFullYear()}</Text>
            <Text style={styles.item}>Signature :</Text>
          </View>
          <View>
            <Text>
              Règlement par espèce ou par chèque bancaire à l·ordre du HBC Gien
              Loiret, celui-ci ne sera encaissé qu·à la livraison de la
              commande. Les délais de livraison peuvent varier selon les
              quantités commandées, un montant minimum nous étant imposé par
              notre fournisseur. Nous mettons tout en œuvre pour réduire au
              maximum ces délais.
            </Text>
            <Text>Chèque n° : ………………………………………………</Text>
            <Text>Banque : ………………………………………………</Text>
          </View>
        </Page>
      </Document>
    );
  }
}

export default PDFCommande;
