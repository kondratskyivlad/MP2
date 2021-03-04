import React from 'react';
import { View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from "./components/home";
import Profile from "./components/profile";

export const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: { screen: Home,
            navigationOptions:{
                tabBarLabel:'Home',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon
                            style={[{color: '#ffcc00'}]}
                            size={25}
                            name={'ios-home'}
                        />
                    </View>),
                activeColor: '#ffcc00',
                inactiveColor: '#ffcc00',
                barStyle: { backgroundColor: '#000' },
            }
        },
        Profile: { screen: Profile,
            navigationOptions:{
                tabBarLabel:'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon
                            style={[{color: '#ffcc00'}]}
                            size={25}
                            name={'ios-person'}
                        />
                    </View>),
                activeColor: '#ffcc00',
                inactiveColor: '#ffcc00',
                barStyle: { backgroundColor: '#000' },
            }
        },
    },
    {
        initialRouteName: "Home",
        activeColor: '#9ebe32',
        inactiveColor: '#9ebe32',
        barStyle: { backgroundColor: '#9ebe32' },
    },
);

export default createAppContainer(TabNavigator);


