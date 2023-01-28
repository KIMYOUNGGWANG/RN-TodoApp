import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, Text, View} from 'react-native';
const HomeTab = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
    </View>
  );
};
const SearchTab = () => {
  return <Text>Search</Text>;
};
const NotificationTab = () => {
  return <Text>Notification</Text>;
};
const MessageTab = () => {
  return <Text>Message</Text>;
};
const MainScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#efb810',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="search" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotificationTab}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="notifications" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="message"
        component={MessageTab}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="message" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
