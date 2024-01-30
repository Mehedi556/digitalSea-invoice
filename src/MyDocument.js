import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import logo from './assets/user.png';

const styles = StyleSheet.create({
  page: {
    width: '796px',
    height: '480px',
  },
  mainDiv: {
    padding: '10px',
    border: '1px solid black',
  },
  logo: {
    width: '55px',
    height: '50px',
  },
  headerMain: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid black',
    padding: '7px',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    width: '100%',
    paddingRight: '30px',
    alignItems: 'center',
  },
  partyDetails: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid black',
    fontSize: '10px',
  },
  tableMain: {
    borderBottom: '1px solid black',
  },

  // Table Header CSS

  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    fontSize: '11px',
  },

  headerCol1: {
    width: '8%',
    borderBottom: '1px solid black',
    textAlign: 'center',
    paddingVertical: '5px',
  },
  headerCol2: {
    width: '28%',
    border: '1px solid black',
    borderRight: 0,
    borderTop: 0,
    paddingVertical: '5px',
    paddingLeft: '3px',
  },
  headerCol3: {
    width: '8%',
    border: '1px solid black',
    textAlign: 'center',
    borderRight: 0,
    borderTop: 0,
    paddingVertical: '5px',
  },
  headerCol4: {
    width: '9%',
    border: '1px solid black',
    textAlign: 'center',
    borderRight: 0,
    borderTop: 0,
    paddingVertical: '5px',
  },
  headerCol5: {
    width: '12%',
    border: '1px solid black',
    textAlign: 'center',
    borderRight: 0,
    borderTop: 0,
    paddingVertical: '5px',
  },
  headerCol6: {
    width: '7%',
    border: '1px solid black',
    textAlign: 'center',
    borderRight: 0,
    borderTop: 0,
  },
  headerCol7: {
    width: '10%',
    border: '1px solid black',
    textAlign: 'center',
    borderRight: 0,
    borderTop: 0,
  },
  headerCol8: {
    width: '12%',
    border: '1px solid black',
    textAlign: 'center',
    borderRight: 0,
    borderTop: 0,
    paddingVertical: '5px',
  },

  // Table body CSS

  tableBody: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: '10px',
  },

  tableBodyRow: {
    display: 'flex',
    flexDirection: 'row',
  },

  bodyCol1: {
    width: '8%',
    textAlign: 'center',
    paddingVertical: '8px',
  },
  bodyCol2: {
    width: '28%',
    paddingLeft: '4px',
    paddingVertical: '8px',
    borderLeft: '1px solid black',
  },
  bodyCol3: {
    width: '8%',
    textAlign: 'center',
    paddingVertical: '8px',
    borderLeft: '1px solid black',
  },
  bodyCol4: {
    width: '9%',
    textAlign: 'center',
    paddingVertical: '8px',
    borderLeft: '1px solid black',
  },
  bodyCol5: {
    width: '12%',
    textAlign: 'center',
    paddingVertical: '8px',
    borderLeft: '1px solid black',
  },
  bodyCol6: {
    width: '7%',
    textAlign: 'center',
    paddingVertical: '8px',
    borderLeft: '1px solid black',
  },
  bodyCol7: {
    width: '10%',
    textAlign: 'center',
    paddingVertical: '8px',
    borderLeft: '1px solid black',
  },
  bodyCol8: {
    width: '12%',
    textAlign: 'center',
    paddingVertical: '8px',
    borderLeft: '1px solid black',
  },

  //   Grand Total CSS

  totalCol1: {
    width: '23%',
    textAlign: 'center',
  },
  totalCol2: {
    width: '10%',
  },
  totalCol3: {
    width: '12%',
  },
  totalCol4: {
    width: '10%',
  },
  totalCol5: {
    width: '8%',
    paddingLeft: '5px',
    textAlign: 'center',
    borderLeft: '1px solid black',
  },
});

const MyDocument = () => {
  return (
    <Document>
      <Page style={{ width: '796px', height: '480px' }}>
        <View style={{ margin: '15px', border: '1px solid black' }}>
          <View style={styles.headerMain}>
            <View>
              <Image src={logo} style={styles.logo} />
            </View>
            <View style={styles.header}>
              <Text style={{ fontSize: '10px', fontWeight: 'bold' }}>
                Cash Memo
              </Text>
              <Text style={{ fontSize: '13px', fontWeight: 'bold' }}>
                Siwani Men's Boutique
              </Text>
              <Text style={{ fontSize: '9px' }}>
                272 Park street Dargah road, Kolkata. Mobile: 9987474657587
              </Text>
              <Text style={{ fontSize: '10px' }}>
                GSTIN NO: 4585HDH56558JJD
              </Text>
            </View>
          </View>
          <View style={styles.partyDetails}>
            <View
              style={{
                width: '100%',
                borderRight: '1px solid black',
                padding: '5px',
                paddingVertical: '7px',
              }}
            >
              <Text>Party Details:</Text>
              <Text>Cash</Text>
              <Text>MOBILE NO.</Text>
            </View>
            <View
              style={{ width: '100%', padding: '5px', paddingVertical: '10px' }}
            >
              <Text>Invoice No. : 690/2023-24</Text>
              <Text>Dated: 22-08-2023 (06:56 PM)</Text>
            </View>
          </View>
          <View style={styles.tableMain}>
            <View style={styles.tableHeader}>
              <View style={styles.headerCol1}>
                <Text>S.NO.</Text>
              </View>
              <View style={styles.headerCol2}>
                <Text>Description of Goods</Text>
              </View>
              <View style={styles.headerCol3}>
                <Text>Qty</Text>
              </View>
              <View style={styles.headerCol4}>
                <Text>Unit</Text>
              </View>
              <View style={styles.headerCol5}>
                <Text>List Price</Text>
              </View>
              <View style={styles.headerCol6}>
                <Text>Discount</Text>
              </View>
              <View style={styles.headerCol7}>
                <Text>Discount Amt.</Text>
              </View>
              <View style={styles.headerCol8}>
                <Text>Price</Text>
              </View>
              <View style={styles.headerCol8}>
                <Text>Amount</Text>
              </View>
            </View>

            <View style={styles.tableBody}>
              <View style={styles.tableBodyRow}>
                <View style={styles.bodyCol1}>
                  <Text>1</Text>
                </View>
                <View style={styles.bodyCol2}>
                  <Text>Kurta Fabric</Text>
                </View>
                <View style={styles.bodyCol3}>
                  <Text>4.00</Text>
                </View>
                <View style={styles.bodyCol4}>
                  <Text>Metre</Text>
                </View>
                <View style={styles.bodyCol5}>
                  <Text>250.00</Text>
                </View>
                <View style={styles.bodyCol6}>
                  <Text>10.00</Text>
                </View>
                <View style={styles.bodyCol7}>
                  <Text>100.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>225.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>900.00</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderTop: '1px solid black',
              borderBottom: '1px solid black',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '10px',
              fontSize: '12px',
              paddingVertical: 6,
            }}
          >
            <View style={styles.totalCol1}>
              <Text>Grand Total</Text>
            </View>
            <View style={styles.totalCol2}>
              <Text>4.00</Text>
            </View>
            <View style={styles.totalCol3}>
              <Text>1,000.00</Text>
            </View>
            <View style={styles.totalCol4}>
              <Text>100.00</Text>
            </View>
            <View style={styles.totalCol5}>
              <Text>900.00</Text>
            </View>
          </View>

          <View
            style={{
              fontSize: '12px',
              width: '100%',
              fontWeight: 'extrabold',
              borderBottom: '1px solid black',
            }}
          >
            <View
              style={{
                paddingVertical: 4,
                paddingLeft: '5px',
              }}
            >
              <Text>
                <Text style={{ fontSize: '12px' }}>Rupees</Text> Nine Hundred
                Only
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              padding: '7px',
            }}
          >
            <Text
              style={{
                fontSize: '12px',
                textAlign: 'right',
                paddingRight: '40px',
              }}
            >
              For Siwani Mens Boutique
            </Text>
            <Text
              style={{
                fontSize: '12px',
                textAlign: 'left',
              }}
            >
              INCLUDE OF ALL TAXES
            </Text>
            <Text
              style={{
                fontSize: '12px',
                textAlign: 'right',
                paddingRight: '40px',
              }}
            >
              Authorised Signatory
            </Text>
          </View>
        </View>
        <View style={{ margin: '15px', border: '1px solid black' }}>
          <View style={styles.headerMain}>
            <View>
              <Image src={logo} style={styles.logo} />
            </View>
            <View style={styles.header}>
              <Text style={{ fontSize: '10px', fontWeight: 'bold' }}>
                Cash Memo
              </Text>
              <Text style={{ fontSize: '13px', fontWeight: 'bold' }}>
                Siwani Men's Boutique
              </Text>
              <Text style={{ fontSize: '9px' }}>
                272 Park street Dargah road, Kolkata. Mobile: 9987474657587
              </Text>
              <Text style={{ fontSize: '10px' }}>
                GSTIN NO: 4585HDH56558JJD
              </Text>
            </View>
          </View>
          <View style={styles.partyDetails}>
            <View
              style={{
                width: '100%',
                borderRight: '1px solid black',
                padding: '5px',
                paddingVertical: '7px',
              }}
            >
              <Text>Party Details:</Text>
              <Text>Cash</Text>
              <Text>MOBILE NO.</Text>
            </View>
            <View
              style={{ width: '100%', padding: '5px', paddingVertical: '10px' }}
            >
              <Text>Invoice No. : 690/2023-24</Text>
              <Text>Dated: 22-08-2023 (06:56 PM)</Text>
            </View>
          </View>
          <View style={styles.tableMain}>
            <View style={styles.tableHeader}>
              <View style={styles.headerCol1}>
                <Text>S.NO.</Text>
              </View>
              <View style={styles.headerCol2}>
                <Text>Description of Goods</Text>
              </View>
              <View style={styles.headerCol3}>
                <Text>Qty</Text>
              </View>
              <View style={styles.headerCol4}>
                <Text>Unit</Text>
              </View>
              <View style={styles.headerCol5}>
                <Text>List Price</Text>
              </View>
              <View style={styles.headerCol6}>
                <Text>Discount</Text>
              </View>
              <View style={styles.headerCol7}>
                <Text>Discount Amt.</Text>
              </View>
              <View style={styles.headerCol8}>
                <Text>Price</Text>
              </View>
              <View style={styles.headerCol8}>
                <Text>Amount</Text>
              </View>
            </View>

            <View style={styles.tableBody}>
              <View style={styles.tableBodyRow}>
                <View style={styles.bodyCol1}>
                  <Text>1</Text>
                </View>
                <View style={styles.bodyCol2}>
                  <Text>Kurta Fabric</Text>
                </View>
                <View style={styles.bodyCol3}>
                  <Text>4.00</Text>
                </View>
                <View style={styles.bodyCol4}>
                  <Text>Metre</Text>
                </View>
                <View style={styles.bodyCol5}>
                  <Text>250.00</Text>
                </View>
                <View style={styles.bodyCol6}>
                  <Text>10.00</Text>
                </View>
                <View style={styles.bodyCol7}>
                  <Text>100.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>225.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>900.00</Text>
                </View>
              </View>
              <View style={styles.tableBodyRow}>
                <View style={styles.bodyCol1}>
                  <Text>1</Text>
                </View>
                <View style={styles.bodyCol2}>
                  <Text>Kurta Fabric</Text>
                </View>
                <View style={styles.bodyCol3}>
                  <Text>4.00</Text>
                </View>
                <View style={styles.bodyCol4}>
                  <Text>Metre</Text>
                </View>
                <View style={styles.bodyCol5}>
                  <Text>250.00</Text>
                </View>
                <View style={styles.bodyCol6}>
                  <Text>10.00</Text>
                </View>
                <View style={styles.bodyCol7}>
                  <Text>100.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>225.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>900.00</Text>
                </View>
              </View>
              <View style={styles.tableBodyRow}>
                <View style={styles.bodyCol1}>
                  <Text>1</Text>
                </View>
                <View style={styles.bodyCol2}>
                  <Text>Kurta Fabric</Text>
                </View>
                <View style={styles.bodyCol3}>
                  <Text>4.00</Text>
                </View>
                <View style={styles.bodyCol4}>
                  <Text>Metre</Text>
                </View>
                <View style={styles.bodyCol5}>
                  <Text>250.00</Text>
                </View>
                <View style={styles.bodyCol6}>
                  <Text>10.00</Text>
                </View>
                <View style={styles.bodyCol7}>
                  <Text>100.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>225.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>900.00</Text>
                </View>
              </View>
              <View style={styles.tableBodyRow}>
                <View style={styles.bodyCol1}>
                  <Text>1</Text>
                </View>
                <View style={styles.bodyCol2}>
                  <Text>Kurta Fabric</Text>
                </View>
                <View style={styles.bodyCol3}>
                  <Text>4.00</Text>
                </View>
                <View style={styles.bodyCol4}>
                  <Text>Metre</Text>
                </View>
                <View style={styles.bodyCol5}>
                  <Text>250.00</Text>
                </View>
                <View style={styles.bodyCol6}>
                  <Text>10.00</Text>
                </View>
                <View style={styles.bodyCol7}>
                  <Text>100.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>225.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>900.00</Text>
                </View>
              </View>
              <View style={styles.tableBodyRow}>
                <View style={styles.bodyCol1}>
                  <Text>1</Text>
                </View>
                <View style={styles.bodyCol2}>
                  <Text>Kurta Fabric</Text>
                </View>
                <View style={styles.bodyCol3}>
                  <Text>4.00</Text>
                </View>
                <View style={styles.bodyCol4}>
                  <Text>Metre</Text>
                </View>
                <View style={styles.bodyCol5}>
                  <Text>250.00</Text>
                </View>
                <View style={styles.bodyCol6}>
                  <Text>10.00</Text>
                </View>
                <View style={styles.bodyCol7}>
                  <Text>100.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>225.00</Text>
                </View>
                <View style={styles.bodyCol8}>
                  <Text>900.00</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderTop: '1px solid black',
              borderBottom: '1px solid black',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '10px',
              fontSize: '12px',
              paddingVertical: 6,
            }}
          >
            <View style={styles.totalCol1}>
              <Text>Grand Total</Text>
            </View>
            <View style={styles.totalCol2}>
              <Text>4.00</Text>
            </View>
            <View style={styles.totalCol3}>
              <Text>1,000.00</Text>
            </View>
            <View style={styles.totalCol4}>
              <Text>100.00</Text>
            </View>
            <View style={styles.totalCol5}>
              <Text>900.00</Text>
            </View>
          </View>

          <View
            style={{
              fontSize: '12px',
              width: '100%',
              fontWeight: 'extrabold',
              borderBottom: '1px solid black',
            }}
          >
            <View
              style={{
                paddingVertical: 4,
                paddingLeft: '5px',
              }}
            >
              <Text>
                <Text style={{ fontSize: '12px' }}>Rupees</Text> Nine Hundred
                Only
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              padding: '7px',
            }}
          >
            <Text
              style={{
                fontSize: '12px',
                textAlign: 'right',
                paddingRight: '40px',
              }}
            >
              For Siwani Mens Boutique
            </Text>
            <Text
              style={{
                fontSize: '12px',
                textAlign: 'left',
              }}
            >
              INCLUDE OF ALL TAXES
            </Text>
            <Text
              style={{
                fontSize: '12px',
                textAlign: 'right',
                paddingRight: '40px',
              }}
            >
              Authorised Signatory
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
