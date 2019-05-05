import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

import Splash from '../screens/Splash'
import Welcome from '../screens/Welcome'
import Otp from '../screens/Otp'

import Home from '../screens/Home'
import CollegeNotifications from '../screens/CollegeNotifications'
import BatchNotifications from '../screens/BatchNotifications'
import DeptNotifications from '../screens/DeptNotifications'
import Profile from '../screens/Profile'

export const authStack = createStackNavigator({
    Splash: { screen: Splash },
    Welcome: { screen: Welcome },
    Otp: { screen: Otp }
})

export const notificationsTabs = createMaterialTopTabNavigator({
    College: { screen: CollegeNotifications },
    Batch: { screen: BatchNotifications },
    Department: { screen: DeptNotifications }
})

export const appStack = createBottomTabNavigator({
    Home: { screen: Home },
    Notifications: { screen: notificationsTabs },
    Profile: { screen: Profile },
},{
    initialRouteName:'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            switch(routeName){
                case 'Home':
                    iconName = require('../assets/home.png');
                    iconNameFocused = require('../assets/home.png');
                    break;
                case 'Notifications':
                    iconName = require('../assets/notifications.png');
                    iconNameFocused = require('../assets/notifications.png');
                    break;
                case 'Profile':
                    iconName = require('../assets/profile.png');
                    iconNameFocused = require('../assets/profile.png');
                    break;
            }
            if(focused)
            return ( <Image style={{ width: 20, height: 20}} color={tintColor} source={iconNameFocused} /> );
            else
            return ( <Image style={{ width: 20, height: 20}} color={tintColor} source={iconName} /> );
        }
    }),
    animationEnabled: false,
    swipeEnabled: false,
  })

export const AppNavigator = createSwitchNavigator({
    AuthStack: { screen: authStack },
    AppStack: { screen: appStack },
})

export default createAppContainer(AppNavigator)