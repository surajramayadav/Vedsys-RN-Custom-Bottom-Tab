import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Fun from 'react-native-vector-icons/SimpleLineIcons';
import Pill from 'react-native-vector-icons/MaterialCommunityIcons';
import Help from 'react-native-vector-icons/Feather';
import Reports from 'react-native-vector-icons/FontAwesome5';
import Reminders from 'react-native-vector-icons/MaterialIcons';
import Services from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from 'react-native-vector-icons/MaterialIcons';
import Logout from 'react-native-vector-icons/MaterialIcons';

export default function Profile({navigation}) {
  return (
    <View style={{backgroundColor: '#C6E5F7', width: '100%', height: '100%'}}>
      <View
        style={{
          margin: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image
             source={{uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
    
            style={{width: 50, height: 50, borderRadius: 50}}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#06112D',
              margin: 15,
            }}>
            Ariana Stark
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Help name="help-circle" size={20} />
          <Text style={{fontSize: 15, fontWeight: 'bold', margin: 15}}>
            Help
          </Text>
        </View>
      </View>
      <View style={{margin: 40}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Reports name="notes-medical" size={25} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              margin: 15,
            }}>
            Reports
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Fun name="game-controller" size={25} color="#000" />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              margin: 15,
            }}>
            Fun & Games
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Reminders name="event-note" size={25} />

          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              margin: 15,
            }}>
            Reminders
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Services')}>
            <Services name="heart-plus-outline" size={25} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              margin: 15,
            }}>
            Services
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            // alignSelf:'center'
          }}>
          <Pill name="pill" size={32} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              margin: 15,
            }}>
            Pill Dispense
          </Text>
        </View>
      </View>
      <View style={{position: 'relative', top: 250, paddingLeft: 50}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderRightWidth: 2,
              borderRadius: 0,
              padding: 5,
              alignItems: 'center',
            }}>
            <Settings name="settings" size={25} />
            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10}}>
              Settings
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Logout name="logout" size={25} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10}}>
              Log Out
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
