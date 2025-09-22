import { SafeAreaView, ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus, faCircleUser, faUsers } from '@fortawesome/free-solid-svg-icons';



const AddFriendScreen = React.memo(() => {
    const [activeTab, setActiveTab] = useState<'friends' | 'groups'>('friends');

    const renderFriendsContent = () => (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ color: '#cfd8e8', fontSize: 16, marginBottom: 20 }}>Friends</Text>
            <Text style={{ color: '#cfd8e8', opacity: 0.7 }}>Your friends will appear here</Text>
            {/* Add your friends list here */}
        </View>
    );

    const renderGroupsContent = () => (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ color: '#cfd8e8', fontSize: 16, marginBottom: 20 }}>Task Groups</Text>
            <Text style={{ color: '#cfd8e8', opacity: 0.7 }}>Your task groups will appear here</Text>
            {/* Add your groups list here */}
        </View>
    );

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: .85 }} colors={['#3a3a3a', '#000000']} style={{ flex: 1 }} >
            <SafeAreaView style={{ flex: 1 }}>
                {/* Custom Header */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: '#3d4147'
                }}>
                    {/* Left: Profile Circle */}
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faCircleUser} size={30} color="#cfd8e8" />
                    </TouchableOpacity>

                    {/* Center: Title */}
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#cfd8e8'
                    }}>{activeTab === 'friends' ? 'Friends' : 'Groups'}</Text>

                    {/* Right: Add Icon */}
                    <TouchableOpacity>
                        <FontAwesomeIcon
                            icon={activeTab === 'friends' ? faUserPlus : faUsers}
                            size={25}
                            color="#cfd8e8"
                        />
                    </TouchableOpacity>
                </View>

                {/* Tab Switcher */}
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#2d2d2d',
                    marginHorizontal: 16,
                    marginTop: 16,
                    borderRadius: 8,
                    padding: 4
                }}>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            paddingVertical: 12,
                            backgroundColor: activeTab === 'friends' ? '#3d4147' : 'transparent',
                            borderRadius: 6,
                            alignItems: 'center'
                        }}
                        onPress={() => setActiveTab('friends')}
                    >
                        <Text style={{
                            color: activeTab === 'friends' ? '#cfd8e8' : '#888',
                            fontWeight: activeTab === 'friends' ? 'bold' : 'normal'
                        }}>Friends</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flex: 1,
                            paddingVertical: 12,
                            backgroundColor: activeTab === 'groups' ? '#3d4147' : 'transparent',
                            borderRadius: 6,
                            alignItems: 'center'
                        }}
                        onPress={() => setActiveTab('groups')}
                    >
                        <Text style={{
                            color: activeTab === 'groups' ? '#cfd8e8' : '#888',
                            fontWeight: activeTab === 'groups' ? 'bold' : 'normal'
                        }}>Groups</Text>
                    </TouchableOpacity>
                </View>

                {/* Tab Content */}
                {activeTab === 'friends' ? renderFriendsContent() : renderGroupsContent()}
            </SafeAreaView>
        </LinearGradient>
    )


});
export default AddFriendScreen