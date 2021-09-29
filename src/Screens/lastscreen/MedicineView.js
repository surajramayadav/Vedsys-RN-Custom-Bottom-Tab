import React from 'react';
import {StyleSheet, Text, Image, ScrollView, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

function MedicineView() {
  return (
    <View style={styles.container}>
      <View style={{height: '5%'}}>
        <Icon name="caret-down" size={25} />
      </View>
      <View style={styles.namecontainer}>
        <Text style={styles.text}>oxycodone</Text>
        <Text style={{fontSize: responsiveFontSize(2), color: 'green'}}>
          20 Pills Left
        </Text>
      </View>
      <View style={styles.imagecontainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imageview}>
            <Image
              source={{
                uri: 'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/480x270//2/4/7/502247_shutterstock_562612936_975654.jpg',
              }}
              style={{height: 150, width: 200, borderRadius: 25}}
            />
            <Image
              source={{
                uri: 'https://www.arkbh.com/wp-content/uploads/2020/09/oxycodone-1024x569.jpg',
              }}
              style={{
                height: 150,
                width: 200,
                borderRadius: 25,
                marginLeft: 10,
              }}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.detailcontainer}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="cafe" size={22} />
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              marginLeft: 15,
              color: '#000',
            }}>
            Before Breakfast
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Icon name="time-outline" size={22} />
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              marginLeft: 15,
              color: '#000',
            }}>
            6 - 7am Approx
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="bandage-outline" size={22} />
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              marginLeft: 15,
              color: '#000',
            }}>
            1 Pill
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(50),
    width: responsiveWidth(100),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveFontSize(4),
  },
  namecontainer: {
    width: responsiveWidth(100),
    height: '15%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  imagecontainer: {
    width: responsiveWidth(100),
    paddingLeft: 30,
  },
  imageview: {
    width: responsiveWidth(90),
    flexDirection: 'row',
  },
  detailcontainer: {
    width: responsiveWidth(100),
    height: '40%',
    justifyContent: 'space-evenly',
    paddingLeft: 30,
  },
});

export default MedicineView;
