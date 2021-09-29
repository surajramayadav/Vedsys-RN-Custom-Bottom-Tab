import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
    responsiveHeight as rH,
    responsiveWidth as rW,
    responsiveFontSize as rS,
} from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/AntDesign";

export default function Button() {
    return (
        <View>
            <View>
                
                    <View style={{ display: 'flex', height: rH(9), width: rW(100), flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FFF', borderColor: 'grey', }}>
                    <TouchableOpacity onPress={() => console.log("delete")}>
                        <View style={{ borderWidth: 1,borderColor:'#FFF',backgroundColor:'#FFF', height:42, width:42, marginBottom: 24, justifyContent:'center', alignItems:'center', borderRadius: 21, }}>
                        <Icon name="delete" size={20} color="#000" /> 
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("Cancel")}>
                        <View style={{display:'flex', borderWidth: 2, marginBottom: 26, borderRadius: 22,height: rH(5),justifyContent:'center',alignItems: 'center'}}>
                            <Text style={{ display: 'flex',  width: rW(22),  fontSize: 22, alignItems: 'center', justifyContent: 'center', marginLeft: 13, color: '#000'}}> Cancel</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("Save")}>

                        <View style={{display:'flex', borderWidth: 1, marginBottom: 26, borderRadius: 22, backgroundColor: '#00001a',height: rH(5),justifyContent:'center',alignItems: 'center' }}>
                            <Text style={{ display: 'flex',paddingLeft:10,  width: rW(22),  fontSize: 22, alignItems: 'center', justifyContent: 'center', marginLeft: 13, color: '#FFF'}}> Save</Text>
                        </View>
                        </TouchableOpacity>

                        {/* <View style={{display:'flex', borderWidth: 1, marginBottom: 26, backgroundColor: '#00001a', borderRadius: 22 }}>
                            <Text style={{ display: 'flex', height: rH(5), width: rW(22),  fontSize: 22, alignItems: 'center', justifyContent: 'center',  color: '#FFF', paddingLeft:10}}> Save</Text>
                        </View> */}

                    </View>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
