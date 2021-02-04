// import React from "react";
// import {
//   PDFDownloadLink,
//   Document,
//   Page,
//   View,
//   Text,
//   Image,
//   StyleSheet,
// } from "@react-pdf/renderer";
// import Logo from "./split.png";
// import moment from "moment";
// import { Button } from "reactstrap";

// let LogoPdf = Logo;

// const styles = StyleSheet.create({
//   section: {
//     marginTop: 20,
//     marginLeft: 80,
//     marginRight: 80,
//     maxWidth: 420,
//     padding: 10,
//   },

//   textStyle: {
//     marginTop: 10,
//     fontSize: 10,
//     lineHeight: 1.5,
//     letterSpacing: 1,
//     fontWeight: 700,
//     fontStyle: "bold",
//   },

//   header1: {
//     marginTop: 20,
//   },
//   header2: {
//     fontSize: 20,
//     textAlign: "center",
//   },
//   header3: {
//     fontSize: 25,
//     fontWeight: 700,
//     fontStyle: "bold",
//     lineHeight: 1.5,
//     letterSpacing: 1,
//     paddingLeft: 5,
//   },
//   border2: {
//     marginTop: 5,
//     borderBottom: "2 solid #00000",
//   },
//   signatureText: {
//     textAlign: "center",
//     fontSize: 12,
//     fontWeight: 600,
//     fontStyle: "bold",
//     lineHeight: 1.5,
//     letterSpacing: 1,
//     paddingBottom: 2,
//     marginTop: 15,
//   },
//   signatureBorder: {
//     borderBottom: "1 solid #00000",
//     width: 80,
//     paddingTop: 2,
//     textAlign: "center",
//     marginLeft: 160,
//   },

//   textDiv: {
//     fontSize: 15,
//     fontWeight: 700,
//     fontStyle: "bold",
//     marginTop: 20,
//     marginBottom: 20,
//     lineHeight: 1.5,
//     letterSpacing: 1,
//     textAlign: "center",
//   },
//   imageContainer: {
//     marginTop: 90,
//   },
//   imageContainer2: {
//     marginTop: 20,
//   },
//   image: {
//     maxHeight: 30,
//     maxWidth: 70,
//   },
//   border: {
//     marginTop: 10,
//     borderBottom: "1 solid #d3d3d3",
//   },
//   title: {
//     paddingBottom: 10,
//     fontSize: 10,
//     lineHeight: 1.5,
//     letterSpacing: 1,
//   },
//   content: {
//     marginTop: 20,
//     fontSize: 10,
//   },
//   main: {
//     flexDirection: "row",
//   },

//   signatureView: {
//     paddingBottom: 10,
//     fontSize: 10,
//     lineHeight: 1.5,
//     letterSpacing: 1,
//     paddingRight: 20,
//   },

//   signature: {
//     width: 50,
//     height: 50,
//     marginBottom: 35,
//     marginLeft: 180,
//     marginTop: 10,
//   },

//   splitCircle: {
//     width: 100,
//     height: 100,
//     backgroundColor: "#ddd093",
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     borderBottomRightRadius: 50,
//     borderBottomLeftRadius: 50,
//     marginLeft: 150,
//     // position: "relative"
//   },

//   splitText1: {
//     position: "absolute",
//     marginTop: 35,
//     width: 100,
//     textAlign: "center",
//     fontSize: 10,
//     lineHeight: 1.5,
//     letterSpacing: 1,
//   },
//   splitText2: {
//     position: "absolute",
//     marginTop: 50,
//     width: 100,
//     textAlign: "center",
//     fontSize: 10,
//     lineHeight: 1.5,
//     letterSpacing: 1,
//   },
// });

// const MyDoc = (props) => {
//   return (
//     <Document>
//       <Page style={styles.section}>
//         <View>
//           <Image style={styles.image} source={LogoPdf} />
//         </View>

//         <View style={styles.header1}>
//           <Text style={styles.header2}>{props.props.name} CO-PUBLISHER SPLITSHEET AGREEMENT</Text>
//         </View>

//         <View>
//           <Text style={styles.border2}></Text>
//         </View>

//         <View>
//           {/* <Text style={styles.header4}>THIS AGREEMENT made effective</Text> */}
//           <Text style={styles.content}>
//             {" "}
//             THIS AGREEMENT made effective{" "}
//             {moment(props.props.createdAt).format("MMMM Do YYYY")}
//           </Text>
//         </View>

//         <View>
//           {/* <View style={styles.main}>
//             <Text style={styles.title}>Recording Title:</Text>
//             <Text style={styles.content}>
//               {props.props.props.recordingTitle}
//             </Text>
//           </View> */}

//           {props &&
//             props.props &&
//             props.props.props &&
//             props.props.props.collaborators &&
//             props.props.props.collaborators.map((item, index) => (
//               <View key={index}>
//                 <View>
//                   <Text style={styles.textStyle}>
//                     WHEREAS {item.email} agree to co-publish a composition
//                     entitled {props.props.name} (the "Composition").
//                   </Text>
//                 </View>
//                 <View style={styles.main}>
//                   <Text style={styles.title}>Name:</Text>
//                   <Text style={styles.content}> {item.name}</Text>
//                 </View>

//                 <View style={styles.main}>
//                   <Text style={styles.title}>Email Address:</Text>
//                   <Text style={styles.content}>{item.email}</Text>
//                 </View>

//                 <View style={styles.main}>
//                   <Text style={styles.title}>Phone:</Text>
//                   <Text style={styles.content}>{item.mobileNo}</Text>
//                 </View>

//                 <View style={styles.splitCircle}>
//                   <Text style={styles.splitText1}>Split</Text>
//                   <Text style={styles.splitText2}>{item.split}</Text>
//                 </View>

//                 <View>
//                   <Text style={styles.signatureText}>Signature</Text>
//                   <Text style={styles.signatureBorder}></Text>
//                 </View>
//                 <View style={styles.main}>
//                   <Image source={item.signature} style={styles.signature} />
//                 </View>
//               </View>
//             ))}
//         </View>
//       </Page>
//     </Document>
//   );
// };
// const PDFDocument = (props) => (
//   <>
//     <Button>
//       <PDFDownloadLink
//         document={<MyDoc props={props} />}
//         fileName="splitsheet.pdf"
//       >
//         {({ blob, url, loading, error }) =>
//           loading ? "Loading document..." : "Download pdf"
//         }
//       </PDFDownloadLink>
//     </Button>
//   </>
// );

// export default PDFDocument;
