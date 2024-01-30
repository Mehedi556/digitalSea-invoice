import {
  Page,
  PDFViewer,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

import font1 from "../src/fonts/Inter-Bold.ttf";
import font2 from "../src/fonts/Inter-Medium.ttf";
import font3 from "../src/fonts/Inter-Regular.ttf";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: font3,
      fontWeight: "normal",
    },
    {
      src: font2,
      fontWeight: "medium",
    },
    {
      src: font1,
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    fontSize: 9,
    fontFamily: "Inter",
    fontWeight: "normal",
    color: "#4A4A4A",
  },
  pageLayout: {
    margin: 30,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  headerCol: {
    width: "50%",
  },
  headerColItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headersHeader: {
    marginBottom: 7,
    fontSize: 10,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  headersText: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  border: {
    borderStyle: "solid",
    borderWidth: "0.5px",
  },
  usageBorder: {
    borderStyle: "dotted",
    borderWidth: "0.4px",
  },
});

function App() {
  return (
    <PDFViewer style={{ height: "90vh", width: "100%" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.pageLayout}>
            <View>
              <Image src="/logo.png" style={{ width: 150, height: 40 }} />
              <Text
                style={{
                  fontSize: 14,
                  marginVertical: 8,
                  fontWeight: "medium",
                }}
              >
                Final invoice for the August 2023 billing period
              </Text>
            </View>
            <View style={styles.header}>
              <View style={[styles.headerCol, { marginTop: 20 }]}>
                <Text style={styles.headersHeader}>From</Text>
                <View style={styles.headersText}>
                  <Text>DigitalSea LLCD</Text>
                  <Text>99 Avenue of the Americas, 122nd Floor</Text>
                  <Text>New York, NY 100013</Text>
                  <Text>PAN: AAFCD84504R</Text>
                  <Text>GST number: 9917USA269005OS9</Text>
                </View>
              </View>
              <View style={styles.headerCol}>
                <Text style={styles.headersHeader}>Invoice Details</Text>
                <View style={styles.headersText}>
                  <View style={styles.headerColItem}>
                    <Text>Invoice number:</Text>
                    <Text>4647457793</Text>
                  </View>
                  <View style={styles.headerColItem}>
                    <Text>Date of issue</Text>
                    <Text>September 112, 2023</Text>
                  </View>
                  <View style={styles.headerColItem}>
                    <Text>Payment due on:</Text>
                    <Text>September 40, 2023</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.header, { marginTop: -20 }]}>
              <View style={[styles.headerCol, { marginTop: 50 }]}>
                <Text style={styles.headersHeader}>Billing Details</Text>
                <View style={styles.headersText}>
                  <Text>My Team</Text>
                  <Text>invorocket@gmail.com</Text>
                  <Text>7,2F Miajan Ostagar Lane</Text>
                  <Text>Kolkata, WB 700017</Text>
                  <Text>INDIA</Text>
                </View>
              </View>
              <View style={styles.headerCol}>
                <Text style={styles.headersHeader}>Invoice Details</Text>
                <View style={styles.headerColItem}>
                  <Text>do:team:</Text>
                  <Text>a2372400-47ca-46a7-bcd2-315645b4d1e1</Text>
                </View>
              </View>
            </View>

            <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 14,
                  marginVertical: 8,
                  fontWeight: "medium",
                }}
              >
                Summary
              </Text>
              <hr style={styles.border} />
              <View
                style={[
                  styles.headerColItem,
                  { marginTop: 9, marginBottom: 7 },
                ]}
              >
                <Text>Total usage charges</Text>
                <Text>$6.00</Text>
              </View>
              <hr style={styles.usageBorder} />
              <View style={styles.headerColItem}>
                <Text style={{ marginTop: 10, marginBottom: 7 }}>Subtotal</Text>
                <Text>$6.00</Text>
              </View>
              <View style={styles.headerColItem}>
                <Text>GST India (18.00%)</Text>
                <Text>$1.08</Text>
              </View>
              <hr style={[styles.border, { marginTop: 8, marginBottom: 12 }]} />
              <View style={[styles.headerColItem, { fontWeight: "bold" }]}>
                <Text style={{ fontSize: 14, marginBottom: 8 }}>Total due</Text>
                <Text style={{ fontSize: 14, marginBottom: 8 }}>$7.08</Text>
              </View>
              <Text>
                If you have a credit card on file, it will be automatically
                charged within 24 hours
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default App;
