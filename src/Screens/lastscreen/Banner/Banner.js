import React from "react";
import { Image, StyleSheet, Text, View, FlatList ,TouchableOpacity} from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
const BFoodTab = [
    {
        src1: require('../../../assets/Banner/Background2.png'),
        id: 1,
        name: 'Square Concert event',
        date: '10 October 2021'
    },
    {
        src1: require('../../../assets/Banner/Background2.png'),
        id: 1,
        name: 'Square Concert event',
        date: '10 October 2021'
    },
    {
        src1: require('../../../assets/Banner/Background2.png'),
        id: 1,
        name: 'Square Concert event',
        date: '10 October 2021'
    },
    {
        src1: require('../../../assets/Banner/Background2.png'),
        id: 1,
        name: 'Square Concert event',
        date: '10 October 2021'
    },

];
function Banner(props) {



    return (
        <View style={{}}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={BFoodTab}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                    // paddingTop: header ? 20 : -20,

                    // marginBottom: 50,

                }}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            width: responsiveWidth(76),
                            height: responsiveHeight(17),
                            marginRight: 20,
                            backgroundColor: '#c5e4f6',
                            borderRadius: 10
                        }}>
                            {/* <Image 
                                source={item.src1}
                            /> */}
                            <Text style={{
                                fontSize: responsiveFontSize(2),
                                fontWeight: '800',
                                marginLeft: 10, marginTop: 15
                            }}>{item.name}</Text>

                            <Text style={{
                                fontSize: responsiveFontSize(1.5),
                                fontWeight: '800',
                                marginLeft: 10, marginTop: 15
                            }}>{item.date}</Text>


                            <TouchableOpacity style={{backgroundColor:'#06112d',width:responsiveWidth(20),
                            height:responsiveHeight(3.5),
                            borderRadius:5,
                            justifyContent:'center',
                            marginLeft:10, marginTop:10}}>
                                <Text style={{fontSize:responsiveFontSize(1.2),fontWeight: "bold",color:'white',textAlign: 'center'}}>Join Event</Text>
                            </TouchableOpacity>

                        </View>
                    );
                }}
            />
        </View>
    );
}

export default Banner;
