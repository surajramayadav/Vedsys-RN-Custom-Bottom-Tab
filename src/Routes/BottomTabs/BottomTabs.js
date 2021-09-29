import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Screen from '../../Screens/lastscreen/Screen';
import Colors from '../../Constants/theme';
import Routine from '../../Screens/Routine/Routine';
import Health from '../../Screens/Health/Health';

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{
            height: 60, flexDirection: 'row', justifyContent: 'space-around',
            borderTopStartRadius: 20, borderTopEndRadius: 20, elevation: 2,
            alignItems:'center',
        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                console.log("options=>", options.tabBarTestID, index, route)
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    }); s
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ marginTop: 10, alignItems:'center'}}
                    >
                        <Icon name={index == 0 ? "home" : index == 1 ? "sync" : index == 2 ? "fork" : index == 3 ? "wechat" : "bells"}
                         color={isFocused ? Colors.tabcolor : '#121724'} size={25} />
                        <Text style={{ color: isFocused ? Colors.tabcolor : '#121724' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
    return (
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} initialRouteName='HomeStack' screenOptions={{ headerShown: false }} tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: '#a8d674',

        }}

        >
            <Tab.Screen name="Home" component={Screen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),


                }} />
            <Tab.Screen name="Routine" component={Routine}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="adduser" color={color} size={size} />
                    ),

                }} />
            <Tab.Screen name="Health" component={Health}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="pluscircleo" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Chat" component={Screen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="hearto" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="SOS" component={Screen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>

    )
}
