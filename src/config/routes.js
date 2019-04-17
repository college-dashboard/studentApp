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
})

export const AppNavigator = createSwitchNavigator({
    AuthStack: { screen: authStack },
    AppStack: { screen: appStack },
})

export default createAppContainer(AppNavigator)