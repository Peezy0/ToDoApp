import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faList, faPlusCircle, faUserPlus, faUserGroup, faPlus } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import TasksScreen from '../screens/Tasks/TasksScreen';
import AddFriendScreen from '../screens/AddFriend/AddFriendScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Projects from '../screens/Tasks/Projects';
import Task from '../screens/Tasks/Task';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Addtask from '../screens/Tasks/AddTask';
import AddProject from '../screens/Tasks/AddProject';


const TopTab = createMaterialTopTabNavigator();
function TopBarGroup() {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#3d4147', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
                tabBarIndicatorStyle: { backgroundColor: 'black' },
                swipeEnabled: true,
            }}
        >
            <TopTab.Screen
                name="Projects"
                component={Projects}
                options={{ title: 'Projects' }}
            />
            <TopTab.Screen
                name="MyTasks"
                component={Task}
                options={{ title: 'Tasks' }}
            />
        </TopTab.Navigator>
    )
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
    return (
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
                options={({ navigation }) => ({
                    headerShown: false,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
                            <FontAwesomeIcon icon={faPlus} size={25} color="#525355ff" style={{ marginRight: 15 }} />
                        </TouchableOpacity>
                    ),
                    title: 'Tasks',
                    tabBarIcon: ({ color }: { color: string, size: number }) => (
                        <FontAwesomeIcon icon={faList} size={23} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="AddTask"
                component={Addtask}
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
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    presentation: 'modal',
                }}
            >
                <Stack.Screen name="MainTabs" component={TabNavigator} />
                <Stack.Screen
                    name="AddProject"
                    component={AddProject}
                    options={{
                        presentation: 'modal',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}