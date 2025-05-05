import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faList, faPlusCircle, faUserPlus, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import TasksScreen from '../screens/Tasks/TasksScreen';
import AddFriendScreen from '../screens/AddFriend/AddFriendScreen';
import { ColorProperties } from 'react-native-reanimated/lib/typescript/Colors';

const Tab = createBottomTabNavigator();
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'black',
                        borderColor: 'black',


                    },
                    tabBarActiveTintColor: '#cfd8e8',
                    tabBarInactiveTintColor: '#3d4147',
                })}



            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }: { color: string, size: number }) => (
                            <FontAwesomeIcon icon={faHome} size={23} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Tasks"
                    component={TasksScreen}
                    options={{
                        tabBarIcon: ({ color }: { color: string, size: number }) => (
                            <FontAwesomeIcon icon={faList} size={23} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="AddTask"
                    component={HomeScreen} // Change to actual AddTaskScreen later
                    options={{
                        title: 'New Task',
                        tabBarIcon: ({ color }: { color: string, size: number }) => (
                            <FontAwesomeIcon icon={faPlusCircle} size={35} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="AddFriend"
                    component={AddFriendScreen}
                    options={{
                        tabBarIcon: ({ color }: { color: string, size: number }) => (
                            <FontAwesomeIcon icon={faUserGroup} size={23} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }: { color: string, size: number }) => (
                            <FontAwesomeIcon icon={faUser} size={23} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}