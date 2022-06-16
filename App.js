// import { StyleSheet, Text, TextInput, View } from 'react-native';
// import React, { useState, useRef, useMemo, useEffect } from 'react';
// export default function App() {
//   const inputRef = useRef(null);

//   const [text, setText] = useState([
//     { text: "", height: 0 }
//   ]);

//   const [indexRef, setIndex] = useState(0);

//   const addOrRemoveLine = (key, index) => {
//     if (key === "Enter") {
//       let newText = [...text];
//       newText.splice(index + 1, 0, { text: "", height: 0 });
//       setText(newText);
//       setIndex(index + 1)
//     } else if (key === "Backspace") {
//       if (text[index].text.length === 0 && index > 0) {
//         let newText = [...text];
//         newText = newText.filter((e, i) => i != index);
//         setText(newText);
//         setIndex(index - 1)
//       }
//     }
//     // else if (key === "ArrowUp") {
//     //   if (index - 1 >= 0) {
//     //     setIndex((i) => i - 1);
//     //   }
//     // } else if (key === "ArrowDown") {
//     //   if (index + 1 < text.length) {
//     //     setIndex((i) => i + 1);
//     //   }
//     // }
//   }

//   const addText = (txt, index) => {
//     let newText = [...text];
//     if (txt.indexOf("\n") >= 0) {
//       txt = txt.replace(/\n/g, "");
//     }
//     newText[index].text = txt;
//     setText(newText);
//   }

//   const setHeight = (height, index) => {
//     let newText = [...text];
//     newText[index].height = height;
//     setText(newText);
//   }
//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [indexRef]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.view}>
//         {text.map((e, i) => {
//           return (
//             <View key={i} style={styles.viewItem}>
//               <Text style={{ alignSelf: "flex-start" }}>{'\u2022'}</Text>
//               {i === indexRef ? <TextInput
//               blurOnSubmit={true}
//                 ref={inputRef}
//                 style={[styles.input, { height: Math.max(20, e.height) }]}
//                 onKeyPress={({ code }) => addOrRemoveLine(code, i)}
//                 onChangeText={(txt) => addText(txt, i)}
//                 multiline={true}
//                 onContentSizeChange={(event) => {
//                   if (e.text.length > 10) {
//                     setHeight(event.nativeEvent.contentSize.height, i)
//                   }
//                 }}
//               /> : <TextInput
//               blurOnSubmit={true}
//                 style={[styles.input, { height: Math.max(20, e.height) }]}
//                 onKeyPress={({ code }) => addOrRemoveLine(code, i)}
//                 onChangeText={(txt) => addText(txt, i)}
//                 multiline={true}
//                 onContentSizeChange={(event) => {
//                   if (e.text.length > 10) {
//                     setHeight(event.nativeEvent.contentSize.height, i)
//                   }
//                 }}
//               />}
//             </View>
//           )
//         })}
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   view: {
//     width: "50%",
//     height: 300,
//     borderRadius: 20,
//     display: "flex",
//     flexDirection: "column",
//     padding: 15
//   },
//   viewItem: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center"
//   },
//   input: {
//     outlineStyle: "none",
//     flex: 1,
//     textAlignVertical: "center",
//     marginVertical: 2
//   }
// })

// // import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
// // import React, {useState} from 'react';
// // import TimePicker from './TimePicker';
// // import DatePicker from './DatePicker';
// // export default function App () {



// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.view}>
// //        <DatePicker/>
// //       </View>
// //     </View>
// //   );
// // };


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center"
// //   },
// //   view: {
// //     backgroundColor: "#cfcfcf",
// //     borderRadius: 5,
// //     padding: 20
// //   }
// // })

import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { Provider } from 'react-redux';
import Reducers from "./redux/reducers";
import { createStore } from 'redux';
import Main from './Main';

const store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default function App() {

  

  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}

const styles = StyleSheet.create({})