import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet , Font} from '@react-pdf/renderer';
Font.register({
  family: 'Almarai', // Change this to your font family
  src:'/Almarai-Regular.ttf',// Adjust the path to your font filel()
});
// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
   
  },
  table: {
    display: 'table',
    width: '100%',
    margin: 12,
    direction: "rtl", /* Sets the direction to right-to-left */
    textAlign: "right",
  },
  tableRow: {
    flexDirection: 'row',
    direction: "rtl", /* Sets the direction to right-to-left */
    textAlign: "right",
  },
  tableCell: {
    margin: 2,
    padding: 2,
    border: '1px solid black',
    width: '20%',
    fontFamily: 'Almarai', // Use the registered font
    fontSize: 14,
    direction: 'rtl', // Set the text direction to right-to-left
    textAlign: 'center', // Align text to the right

  },
  header: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
});
// Create a Document component
const MyDocument = ({rep}) => (
  <Document>
     <Page size="A4" style={styles.page}>
     <Text style={{ fontSize: 24, marginBottom: 10,textAlign:"center" }}> {rep.testName+"                        "+rep.testDate}</Text>
      <View style={styles.table}>
        {/* Header Row */}
        <View style={[styles.tableRow, styles.header]}>
          <Text style={styles.tableCell}>{"اقتراحات"}</Text>
          <Text style={styles.tableCell}>{"النصائح"}</Text>
          <Text style={styles.tableCell}>{"الأعراض المتوقعة"}</Text>
          <Text style={styles.tableCell}>{"النتيجة"}</Text>
          <Text style={styles.tableCell}>{"التحليل"}</Text>
        </View>
        {/* Data Rows */}
        {rep.analyses.map((el) => (
          <View style={styles.tableRow} >
                     <Text style={styles.tableCell}>{el.recommendations}</Text>
                     <Text style={styles.tableCell}>{el.result>el.referenceRange.max?
                      el.management.high || "غير متوفرة"
                      :el.management.low || "غير متوفرة"}</Text>
                     <Text style={styles.tableCell}>{ el.result>el.referenceRange.max?el.symptoms.high || "غير متوفرة"
                    :el.symptoms.low || "غير متوفرة"}</Text>
                     <Text style={styles.tableCell}>{el.unit+" "+el.result}</Text>
                     <Text style={styles.tableCell}>{el.analysisName}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const PdfDownload = ({fileName,click,rep}) => (
    
    <button className="flex items-center justify-center bg-white border-2 border-gray-300 xl:p-4 lg:p-2 p-4 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors xl:w-6/12 lg:w-9/12" onClick={(e)=>click(e)}>
           <PDFDownloadLink document={<MyDocument rep={rep} />} fileName={`${rep.testName}.pdf`}>
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