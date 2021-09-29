import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  Button,
  Modal,
  View,
  CheckBox,
  ImageBackground,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Prescribe() {
  const [rating, setRating] = React.useState(0);
  const PrescribeTab = [
    {
      id: 1,
      name: 'Oxycodone',
      quantity: '20 Pills Left',
      period: 'Before Breakfast',
      time: '6-7am Approx',
      limit: '1Pill',
      
    },
    {
      id: 2,
      name: 'B 12',
      quantity: '20 Pills Left',
      period: 'After Breakfast',
      time: '6-7am Approx',
      limit: '1Pill',
    },
    {
      id: 3,
      name: 'Vitamin C',
      quantity: '20 Pills Left',
      period: 'After Breakfast',
      time: '6-7am Approx',
      limit: '1Pill',
    },
  ];

  return (
    <>
      <View>
        <Text style={{fontWeight: 'bold', color: 'black'}}>Morning</Text>
      </View>
      <FlatList
        // data={driverData}
        data={PrescribeTab}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingTop: 20}}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#f2f3f7',
              borderRadius: 20,
              margin: 5,
            }}>
            <View style={{paddingRight: 5}}>
              {/* <Image
                style={{
                  height: 80,
                  width: 70,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
                source={require({item.img})}
              /> */}
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black', padding: 5, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    padding: 5,
                    fontWeight: 'bold',
                    fontSize: 10,
                    marginRight: 5,
                  }}>
                  {item.quantity}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#f2f3f7',
                    borderRadius: 10,
                    padding: 5,
                    margin: 2,
                  }}>
                  <Icon name="coffee" color="black" size={10} />
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {item.period}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#f2f3f7',
                    borderRadius: 10,
                    padding: 5,
                    margin: 2,
                  }}>
                  <Icon name="clock-outline" color="black" size={10} />

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#f2f3f7',
                    borderRadius: 10,
                    padding: 5,
                    margin: 2,
                  }}>
                  <Icon name="pill" color="#9ba0ab" size={10} />
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'green',
                      fontWeight: 'bold',
                    }}>
                    {item.limit}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />

      <View>
        <Text style={{fontWeight: 'bold', color: 'black'}}>Afternoon</Text>
      </View>
      <FlatList
        // data={driverData}
        data={PrescribeTab}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingTop: 20}}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#f2f3f7',
              borderRadius: 20,
              margin: 5,
            }}>
            <View style={{paddingRight: 5}}>
              <Image
                style={{
                  height: 80,
                  width: 70,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
                source={require('../assets/Prescribe.jpg')}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black', padding: 5, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: '#90EE90',
                    padding: 5,
                    fontWeight: 'bold',
                    fontSize: 10,
                    marginRight: 5,
                  }}>
                  {item.quantity}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#f2f3f7',
                    borderRadius: 10,
                    padding: 5,
                    margin: 2,
                  }}>
                  <Icon name="coffee" color="black" size={10} />

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {item.period}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#f2f3f7',
                    borderRadius: 10,
                    padding: 5,
                    margin: 2,
                  }}>
                  <Icon name="clock-outline" color="black" size={10} />

                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#f2f3f7',
                    borderRadius: 10,
                    padding: 5,
                    margin: 2,
                  }}>
                  <Icon name="pill" color="#9ba0ab" size={10} />
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'green',
                      fontWeight: 'bold',
                    }}>
                    {item.limit}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </>
  );
}
