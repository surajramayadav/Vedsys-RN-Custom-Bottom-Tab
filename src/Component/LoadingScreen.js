/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import {
   ActivityIndicator,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import ProgressCircle from 'react-native-progress-circle';
 import Filter from 'react-native-vector-icons/Ionicons';
 
 // import * as Progress from 'react-native-progress';
 
 
 
const LoadingScreen = () => {
 
   return (
     <SafeAreaView
       style={{flex: 1, justifyContent: 'center', alignContent: 'center',backgroundColor:'#fff'}}>
       {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
       {/* <ScrollView style={{backgroundColor:'green',flex:1,width:'100%',justifyContent:'center',alignItems:'center'}} */}
       {/* contentInsetAdjustmentBehavior="automatic"> */}
       <View style={{alignItems: 'center', justifyContent: 'center'}}>
         <View style={{alignItems:'center'}}>
           <ProgressCircle
             percent={100}
             radius={50}
             borderWidth={2}
             color="#0c1632"
             shadowColor="#fff"
             bgColor="#fff">
             <Text style={{fontSize: 20,color:"#0c1632"}}><Filter name="checkmark-outline" size={50} color="black" /></Text>
           </ProgressCircle>
           <View >
             {/* <Text style={{fontSize:20,marginTop:10,color:"#0c1632"}}>File uploading...</Text> */}
             <Text style={{fontSize:20,marginTop:10,color:"#0c1632"}}>Rendered Successfully</Text>
             
           </View>
         </View>
       </View>
 
       {/* </ScrollView> */}
     </SafeAreaView>
   );
}

 
 export default LoadingScreen;
 