import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import Menu from 'react-native-vector-icons/Entypo';
import Mic from 'react-native-vector-icons/Feather';
import Notifications from 'react-native-vector-icons/Ionicons';
import Navigation from '../../Routes/Navigation';

export default function Header({navigation}) {
  return (
    <View style={{padding: 10}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity>
            <Menu name="menu" size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Mic name="mic" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10, marginRight: 10}}>
              <Notifications name="notifications-outline" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Screen', {screen: 'Profile'})
              }>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
                style={{width: 30, height: 30, borderRadius: 50}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
