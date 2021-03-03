import React from 'react';
import {View} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
// import Home from '../components/home'
// import Profile from '../components/profile'
//
// export const TabNavigator = createMaterialBottomTabNavigator(
//     {
//         Home: { screen: Home,
//             navigationOptions:{
//                 tabBarLabel:'Home',
//                 tabBarIcon: ({ tintColor }) => (
//                     <View>
//                         <Icon
//                             style={[{color: '#ffcc00'}]}
//                             size={25}
//                             name={'ios-home'}
//                         />
//                     </View>),
//                 activeColor: '#ffcc00',
//                 inactiveColor: '#ffcc00',
//                 barStyle: { backgroundColor: '#000' },
//             }
//         },
//         Profile: { screen: Profile,
//             navigationOptions:{
//                 tabBarLabel:'Profile',
//                 tabBarIcon: ({ tintColor }) => (
//                     <View>
//                         <Icon
//                             style={[{color: '#ffcc00'}]}
//                             size={25}
//                             name={'ios-person'}
//                         />
//                     </View>),
//                 activeColor: '#ffcc00',
//                 inactiveColor: '#ffcc00',
//                 barStyle: { backgroundColor: '#000' },
//             }
//         },
//     },
//     {
//         initialRouteName: "Home",
//         activeColor: '#9ebe32',
//         inactiveColor: '#9ebe32',
//         barStyle: { backgroundColor: '#9ebe32' },
//     },
// );

function data1 () {
    let res1 = []
    let res2 = []
    for(let i = 0; i < 1; i++) {
        res1.push(i)
    }
    for(let i = 1; i < 0; i--) {
        res2.push(i)
    }
    let fnc = res1.concat(res2)
    return fnc.concat(fnc)
}

export const data = [50, 32, 16, 8, 4, 2, 0.5, 0, 0.5, 2, 4, 8, 16, 32, 50];
export const labels = [-5, "", "", "", "", "", "", "", "", "", 0, "", "", "", "", "", "", "", "", "", 5];
