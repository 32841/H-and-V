
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView >
<View style={styles.container6}>
<View style={styles.container2}>
      <Text style={styles.text2}>Second Section</Text>
    </View>
    <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>

    <View style={styles.container3}>
    <Text style={styles.text3}>Third Section</Text>
    </View>
    
    <View style={styles.containerb}>
    <View style={styles.subcontainer1b}><Text style={styles.text4}>second</Text></View>
    <View  style={styles.subcontainer2b}><Text style={styles.text4}>second</Text></View>
    </View>
    
    <View style={styles.containerb}>
    <View style={styles.subcontainer3b}><Text style={styles.text4}>third</Text></View>
    <View  style={styles.subcontainer4b}><Text style={styles.text4}>third</Text></View>
    <View  style={styles.subcontainer5b}><Text style={styles.text4}>third</Text></View>
    </View>
    
    <View style={styles.containerb}>
    <View style={styles.subcontainer6b}><Text style={styles.text5}>Fourth</Text></View>
    <View  style={styles.subcontainer7b}><Text style={styles.text4}>Fourth</Text></View>
    <View  style={styles.subcontainer8b}><Text style={styles.text4}>Fourth</Text></View>
    <View  style={styles.subcontainer9b}><Text style={styles.text4}>Fourth</Text></View>
    
    </View>

    <View style={styles.containerb}>
    <View style={styles.subcontainerab}><Text style={styles.text4}>Fifth</Text></View>
    <View  style={styles.subcontainerbb}><Text style={styles.text4}>Fifth</Text></View>
    <View  style={styles.subcontainercb}><Text style={styles.text4}>Fifth</Text></View>
    <View  style={styles.subcontainerdb}><Text style={styles.text4}>Fifth</Text></View>
    <View  style={styles.subcontainereb}><Text style={styles.text4}>Fifth</Text></View>
    </View>
  <Text>{'\n'}{'\n'}{'\n'}</Text>

    </ScrollView>
    <View style={styles.container9}>
      <Text style={styles.text5}>Footer</Text>
    </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  totalcontainer: { height: '100%', width: '100%' },
  contain: { flex: 1, flexDirection: 'row' },

  container: {

    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%",
  },
  container6: {
    // alignItems: 'center',
    // justifyContent: 'center',
    height: "100%",
    width: "100%",
  },

  container2: {

    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 20,
    width: "100%",
    height: 100,
  },
  text2: {
    fontSize: 20,
    color: "white"
    },
  container3: {
    
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 20,
    width: "100%",
    height: 500,

  },
  text3: {
    fontSize: 50,
    color: "white"
    },
  container4: {
    
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 20,
    width: "100%",
    height: 500,
  },
  text4: {
    fontSize: 40,
    color: "white"
    },
  container5: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 20,
    width: "100%"
  },
  text5: {
    fontSize: 30,
    color: "black"
    },

    container9: {
      backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 20,
    width: "100%",
    height: 100,
    },

    containerb: { flex: 1, flexDirection: 'row' },

    subcontainer1b: {
      height: "100%",
      width: 206,
      backgroundColor: 'powderblue',
    },

    subcontainer2b: {
      height: "100%",
      width: 206,
      backgroundColor: 'blue',
    },

    subcontainer3b: {
      height: 100,
      width: "33.3333333%",
      backgroundColor: 'red',
    },
    subcontainer4b: {
      height: 100,
      width: "33.3333333%",
      backgroundColor: 'green',
    },
    subcontainer5b: {
      height: 100,
      width: "33.3333333%",
      backgroundColor: 'black',
    },
    subcontainer6b: {
      height: 100,
      width: "25%",
      backgroundColor: 'white',
    },
    subcontainer7b: {
      height: 100,
      width: "25%",
      backgroundColor: 'yellow',
    },
    subcontainer8b: {
      height: 100,
      width: "25%",
      backgroundColor: 'purple',
    },
    subcontainer9b: {
      height: 100,
      width: "25%",
      backgroundColor: 'grey',
    },
    subcontainereb: {
      height: 100,
      width: "20%",
      backgroundColor: 'grey',
    },
    subcontainerab: {
      height: 100,
      width: "20%",
      backgroundColor: 'grey',
    },
    subcontainerbb: {
      height: 100,
      width: "20%",
      backgroundColor: 'grey',
    },
    subcontainercb: {
      height: 100,
      width: "20%",
      backgroundColor: 'grey',
    },
    subcontainerdb: {
      height: 100,
      width: "20%",
      backgroundColor: 'grey',
    },

});








// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView >
//     <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>

//      <View style={styles.container1}>
//       <Text style={styles.text1}>navbar</Text>
//       <Text></Text>
//     </View>

//     <View style={styles.container2}>
//       <Text style={styles.text2}>Second Section</Text>
//     </View>

//     <View style={styles.container3}>
//     <Text style={styles.text3}>Third Section</Text>
//     </View>

//     <View style={styles.container4}>
//     <Text style={styles.text4}>Fourth Section</Text>
//     </View>
//     <View style={styles.container1}>
//       <Text style={styles.text1}>navbar</Text>
//       <Text></Text>
//     </View>

//     <View style={styles.container2}>
//       <Text style={styles.text2}>Second Section</Text>
//     </View>

//     <View style={styles.container3}>
//     <Text style={styles.text3}>Third Section</Text>
//     </View>

//     <View style={styles.container4}>
//     <Text style={styles.text4}>Fourth Section</Text>
//     </View>
//     <View style={styles.container1}>
//       <Text style={styles.text1}>navbar</Text>
//       <Text></Text>
//     </View>

//     <View style={styles.container2}>
//       <Text style={styles.text2}>Second Section</Text>
//     </View>

//     <View style={styles.container3}>
//     <Text style={styles.text3}>Third Section</Text>
//     </View>

//     <View style={styles.container4}>
//     <Text style={styles.text4}>Fourth Section</Text>
//     </View>
//     <View style={styles.container1}>
//       <Text style={styles.text1}>navbar</Text>
//       <Text></Text>
//     </View>

//     <View style={styles.container2}>
//       <Text style={styles.text2}>Second Section</Text>
//     </View>

//     <View style={styles.container3}>
//     <Text style={styles.text3}>Third Section</Text>
//     </View>

//     <View style={styles.container4}>
//     <Text style={styles.text4}>Fourth Section</Text>
//     </View>
//     <View style={styles.container1}>
//       <Text style={styles.text1}>navbar</Text>
//       <Text></Text>
//     </View>

//     <View style={styles.container2}>
//       <Text style={styles.text2}>Second Section</Text>
//     </View>

//     <View style={styles.container3}>
//     <Text style={styles.text3}>Third Section</Text>
//     </View>

//     <View style={styles.container4}>
//     <Text style={styles.text4}>Fourth Section</Text>
//     </View>
//     <View style={styles.container1}>
//       <Text style={styles.text1}>navbar</Text>
//       <Text></Text>
//     </View>

//     <View style={styles.container2}>
//       <Text style={styles.text2}>Second Section</Text>
//     </View>

//     <View style={styles.container3}>
//     <Text style={styles.text3}>Third Section</Text>
//     </View>

//     <View style={styles.container4}>
//     <Text style={styles.text4}>Fourth Section</Text>
//     </View>
//     <View style={styles.container1}>
//       <Text style={styles.text1}>navbar</Text>
//       <Text></Text>
//     </View>

//     <View style={styles.container2}>
//       <Text style={styles.text2}>Second Section</Text>
//     </View>

//     <View style={styles.container3}>
//     <Text style={styles.text3}>Third Section</Text>
//     </View>

//     <View style={styles.container4}>
//     <Text style={styles.text4}>Fourth Section</Text>
//     </View>
//     <View style={styles.container1}>
//       <Text style={styles.text1}>navbar</Text>
//       <Text></Text>
//     </View>

//     <View style={styles.container2}>
//       <Text style={styles.text2}>Second Section</Text>
//     </View>

//     <View style={styles.container3}>
//     <Text style={styles.text3}>Third Section</Text>
//     </View>

//     <View style={styles.container4}>
//     <Text style={styles.text4}>Fourth Section</Text>
//     </View>
//     <View style={styles.container1}>
//       <Text style={styles.text1}>navbar</Text>
//       <Text></Text>
//     </View>

//     <View style={styles.container2}>
//       <Text style={styles.text2}>Second Section</Text>
//     </View>

//     <View style={styles.container3}>
//     <Text style={styles.text3}>Third Section</Text>
//     </View>

//     <View style={styles.container4}>
//     <Text style={styles.text4}>Fourth Section</Text>
//     </View>
//     <View style={styles.container1}>
//       <Text style={styles.text1}>navbar</Text>
//       <Text></Text>
//     </View>

//     <View style={styles.container2}>
//       <Text style={styles.text2}>Second Section</Text>
//     </View>

//     <View style={styles.container3}>
//     <Text style={styles.text3}>Third Section</Text>
//     </View>

//     <View style={styles.container4}>
//     <Text style={styles.text4}>Fourth Section</Text>
//     </View>
//   <Text>{'\n'}{'\n'}{'\n'}</Text>

//     </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
  
//   },
//   container1: {
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 20,
//     width: 415,
//     height: 725,
//   },
//   text1: {
//     fontSize: 30,
//     color:"white"
//   },
//   container2: {
//     height: 725,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 20,
//     width: 415
//   },
//   text2: {
//     fontSize: 50,
//     color:"red"
//   },
//   container3: {
  
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 20,
//     width: 415,
//     height: 725,
  
//   },
//   text3: {
//     fontSize: 35,
//     color:"white"
//   },
//   container4: {

//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 20,
//     width: 415,
//     height: 725,
//   },
//   text4: {
//     fontSize: 30,
//     color:"red"
//   },
// });
