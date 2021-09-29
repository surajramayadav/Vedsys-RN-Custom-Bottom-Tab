/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import Filter from 'react-native-vector-icons/MaterialCommunityIcons';
import Pill from 'react-native-vector-icons/MaterialCommunityIcons';
import Break from 'react-native-vector-icons/MaterialIcons';
import Fi from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
export default function Reminder() {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <View style={{width: '100%'}}>
            <View style={styles.head}>
              <View>
                <Text>Reminder</Text>
              </View>
              <View>
                <Fi name="filter-alt" size={20} color="dark-black" />
              </View>
            </View>
            <View>
              <View style={styles.calendar}>
                <CalendarStrip
                  style={{height: 100}}
                  dateNumberStyle={{color: 'black', borderRadius: 5}}
                  highlightDateNumberStyle={{
                    // color: 'white',
                    padding: 20,
                    borderRadius: 50,
                    backgroundColor: '#7daa2f',
                    color: '#fff',
                  }}
                />
              </View>
            </View>
            <View>
              <Text style={styles.weekdays}>Morning</Text>
            </View>

            <View style={{paddingLeft: 16, flexDirection: 'row'}}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderTopWidth: 1,
                }}
                source={{
                  uri: 'https://source.unsplash.com/1600x900/?people,men/600x500',
                }}
              />
              <View
                style={{
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderEndWidth: 1,
                  borderTopColor: '#a7a7a7',
                  borderBottomColor: '#a7a7a7',
                  borderEndColor: '#a7a7a7',
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  width: 233,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      Oxycodone
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#7daa2f',
                        alignItems: 'baseline',
                        fontWeight: 'bold',
                      }}>
                      20 Pills Left
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 6}} />
                <View style={{flexDirection: 'row'}}>
                  <View style={{paddingLeft: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#f3f6f6',
                        padding: 5,
                        borderRadius: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Break name="free-breakfast" size={15} color="black" />
                      <Text style={{fontSize: 7}}>before breakfast</Text>
                    </View>
                  </View>
                  <View style={{paddingLeft: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#f3f6f6',
                        padding: 5,
                        borderRadius: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Filter name="clock-outline" size={15} color="black" />
                      <Text style={{fontSize: 7}}>6-7am approx</Text>
                    </View>
                  </View>
                  <View style={{paddingLeft: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#f3f6f6',
                        padding: 5,
                        borderRadius: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Pill name="pill" size={15} color="black" />
                      <Text style={{fontSize: 7}}>1pill</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop: 10}} />

            <View style={{paddingLeft: 16, flexDirection: 'row'}}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderTopWidth: 1,
                }}
                source={{
                  uri: 'https://source.unsplash.com/1600x900/?people,nature/600x500',
                }}
              />
              <View
                style={{
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderEndWidth: 1,
                  borderTopColor: '#a7a7a7',
                  borderBottomColor: '#a7a7a7',
                  borderEndColor: '#a7a7a7',
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  width: 233,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      Oxycodone
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#7daa2f',
                        alignItems: 'baseline',
                        fontWeight: 'bold',
                      }}>
                      20 Pills Left
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 6}} />
                <View style={{flexDirection: 'row'}}>
                  <View style={{paddingLeft: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#f3f6f6',
                        padding: 5,
                        borderRadius: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Break name="free-breakfast" size={15} color="black" />
                      <Text style={{fontSize: 7}}>before breakfast</Text>
                    </View>
                  </View>
                  <View style={{paddingLeft: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#f3f6f6',
                        padding: 5,
                        borderRadius: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Filter name="clock-outline" size={15} color="black" />
                      <Text style={{fontSize: 7}}>6-7am approx</Text>
                    </View>
                  </View>
                  <View style={{paddingLeft: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#f3f6f6',
                        padding: 5,
                        borderRadius: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Pill name="pill" size={15} color="black" />
                      <Text style={{fontSize: 7}}>1pill</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={{marginTop: 10}} />

            <View style={{paddingLeft: 16, flexDirection: 'row'}}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderTopWidth: 1,
                }}
                source={{
                  uri: 'https://source.unsplash.com/1600x900/?film,girl/600x500',
                }}
              />
              <View
                style={{
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderEndWidth: 1,
                  borderTopColor: '#a7a7a7',
                  borderBottomColor: '#a7a7a7',
                  borderEndColor: '#a7a7a7',
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  width: 233,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      Oxycodone
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#7daa2f',
                        alignItems: 'baseline',
                        fontWeight: 'bold',
                      }}>
                      20 Pills Left
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 6}} />
                <View style={{flexDirection: 'row'}}>
                  <View style={{paddingLeft: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#f3f6f6',
                        padding: 5,
                        borderRadius: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Break name="free-breakfast" size={15} color="black" />
                      <Text style={{fontSize: 7}}>before breakfast</Text>
                    </View>
                  </View>
                  <View style={{paddingLeft: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#f3f6f6',
                        padding: 5,
                        borderRadius: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Filter name="clock-outline" size={15} color="black" />
                      <Text style={{fontSize: 7}}>6-7am approx</Text>
                    </View>
                  </View>
                  <View style={{paddingLeft: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#f3f6f6',
                        padding: 5,
                        borderRadius: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Pill name="pill" size={15} color="black" />
                      <Text style={{fontSize: 7}}>1pill</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 100,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginBottom: 30,
              }}>
              <View
                style={{
                  height: 100,
                  width: '95%',
                  borderWidth: 1,
                  borderColor: 'red',
                  borderRadius: 10,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    height: '100%',
                    width: 11 + 0,
                    backgroundColor: 'red',
                  }}></View>
                <View>
                  <Text>jbn</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  calendar: {
    backgroundColor: 'white',
    padding: 20,
  },
  weekdays: {
    paddingLeft: 16,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
