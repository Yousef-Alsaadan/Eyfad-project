import React, { Fragment } from "react";
import logo from "../../Images/logo.png";
import Almarai from "../../fonts/Almarai-Regular.ttf";

import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Almarai", // Change this to your font family
  src: Almarai, // Adjust the path to your font filel()
});

const userData = JSON.parse(localStorage.getItem("user"));

// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    lineHeight: 1.5,
    flexDirection: "column",
    fontFamily: "Almarai",
    direction: "rtl",
    textAlign: "right",
  },

  spaceBetween: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#3E3E3E",
  },

  spaceBetween2: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#3E3E3E",
  },

  titleContainer: {
    flexDirection: "row",
    marginTop: 24,
  },

  logo: { width: 120 },

  reportTitle: { fontSize: 16, textAlign: "center" },

  addressTitle: {
    fontSize: 11,
    fontWeight: "bold",
    direction: "rtl",
  },

  invoice: { fontWeight: "bold", fontSize: 20 },

  invoiceNumber: { fontSize: 11, fontWeight: "bold" },

  address: {
    fontWeight: 400,
    fontSize: 10,
  },

  theader: {
    marginTop: 20,
    fontSize: 10,
    fontWeight: "bold",
    paddingTop: 4,
    paddingRight: 7,
    flex: 1,
    height: 20,
    backgroundColor: "#DEDEDE",
    borderColor: "whitesmoke",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
  },

  theader2: { flex: 2, borderLeftWidth: 0, borderBottomWidth: 1 },

  tbody: {
    fontSize: 9,
    paddingTop: 4,
    paddingRight: 7,
    flex: 1,
    borderColor: "whitesmoke",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
  },

  total: {
    fontSize: 9,
    paddingTop: 4,
    paddingRight: 7,
    flex: 1.5,
    borderColor: "whitesmoke",
    borderBottomWidth: 1,
  },

  tbody2: { flex: 2, borderLeftWidth: 1 },
});
// Create a Document component
const MyDocument = ({ rep }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* logo section */}
      <View style={styles.titleContainer}>
        <View style={styles.spaceBetween}>
          <Image style={styles.logo} src={logo} />

          <Text style={styles.reportTitle}>{"نتائج التحليل"}</Text>
        </View>
      </View>

      {/* title section */}
      <View style={styles.titleContainer}>
        <View style={styles.spaceBetween2}>
          <View style={{ maxWidth: 200, alignItems: "flex-end" }}>
            <Text style={styles.addressTitle}>
              {"اسم المريض:"} {userData ? userData.firstName : " "}{" "}
              {userData ? userData.secondName : " "}
            </Text>
            <Text style={styles.addressTitle}>
              {"اسم التحليل:"} {rep.testName}
            </Text>
          </View>
          <Text style={styles.addressTitle}>{rep.testDate}</Text>
        </View>
      </View>

      {/* Header Row */}
      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={[styles.theader, styles.theader2]}>
          <Text>{"اقتراحات"}</Text>
        </View>
        <View style={styles.theader}>
          <Text>{"النصائح"}</Text>
        </View>
        <View style={styles.theader}>
          <Text>{"الأعراض المتوقعة"}</Text>
        </View>
        <View style={styles.theader}>
          <Text>{"النتيجة"}</Text>
        </View>
        <View style={styles.theader}>
          <Text>{"التحليل"}</Text>
        </View>
      </View>

      {/* Data Rows */}
      {rep.analyses.map((el, index) => (
        <Fragment key={index}>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={[styles.tbody, styles.tbody2]}>
              <Text>{el.recommendations}</Text>
            </View>
            <View style={styles.tbody}>
              <Text>
                {el.result >= el.referenceRange.max
                  ? el.management.high || "غير متوفرة"
                  : el.management.low || "غير متوفرة"}
              </Text>
            </View>
            <View style={styles.tbody}>
              <Text>
                {el.result >= el.referenceRange.max
                  ? el.symptoms.high || "غير متوفرة"
                  : el.symptoms.low || "غير متوفرة"}
              </Text>
            </View>
            <View style={styles.tbody}>
              <Text>{el.unit + " " + el.result}</Text>
            </View>
            <View style={styles.tbody}>
              <Text>{el.analysisName}</Text>
            </View>
          </View>
        </Fragment>
      ))}

      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={styles.total}>
          <Text></Text>
        </View>
        <View style={styles.total}>
          <Text> </Text>
        </View>
        <View style={styles.total}>
          <Text>{"جميع النتائج المتبقية في النطاق السليم*"}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const PdfDownload = ({ fileName, click, rep }) => (
  <button
    className="flex items-center justify-center bg-white border-2 border-gray-300 xl:p-4 lg:p-2 p-4 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors w-full max-w-lg min-w-[150px] h-12"
    onClick={(e) => click(e)}
  >
    <PDFDownloadLink
      document={<MyDocument rep={rep} />}
      fileName={`${rep.testName}.pdf`}
    >
      <div className="flex items-center gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6663 1.66699H4.99967C4.55765 1.66699 4.13372 1.84259 3.82116 2.15515C3.5086 2.46771 3.33301 2.89163 3.33301 3.33366V16.667C3.33301 17.109 3.5086 17.5329 3.82116 17.8455C4.13372 18.1581 4.55765 18.3337 4.99967 18.3337H14.9997C15.4417 18.3337 15.8656 18.1581 16.1782 17.8455C16.4907 17.5329 16.6663 17.109 16.6663 16.667V6.66699M11.6663 1.66699L16.6663 6.66699M11.6663 1.66699V6.66699H16.6663M13.333 10.8337H6.66634M13.333 14.167H6.66634M8.33301 7.50033H6.66634"
            stroke="#6172F3"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p dir="ltr" className="lg:block hidden">
          {fileName.length > 25
            ? fileName.split("").slice(0, 25).join("") + "..."
            : fileName}
        </p>
        <p dir="ltr" className="lg:hidden block">
          {fileName.length > 20
            ? fileName.split("").slice(0, 20).join("") + "..."
            : fileName}
        </p>
      </div>
    </PDFDownloadLink>
  </button>
);

export default PdfDownload;
