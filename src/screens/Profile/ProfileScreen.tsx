import { SafeAreaView, ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { LKText } from '../../components/General';

const TaskStatCard = React.memo<{ title: string; count: string; }>(({ title, count }) => {
    return (
        <View style={{
            backgroundColor: '#2a2a2a',
            borderRadius: 12,
            padding: 16,
            flex: 1,
            marginHorizontal: 6,
            alignItems: 'center',
        }}>
            <LKText style={{ color: '#888', fontSize: 12, textAlign: 'center', marginBottom: 8 }}>{title}</LKText>
            <LKText style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{count}</LKText>
        </View>
    );
});

const TabSwitcher = React.memo(() => {
    const [activeTab, setActiveTab] = useState<'Priorities' | 'Task' | 'Project'>('Priorities');

    return (
        <View style={{
            flexDirection: 'row',
            borderRadius: 8,
            padding: 4,
            marginHorizontal: 20,
            marginTop: 20
        }}>

        </View>
    );
});

const ProfileScreen = React.memo(() => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: .85 }} colors={['#000000ff', '#000000']} style={{ flex: 1 }} >
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    {/* Header */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 10,
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                    }}>
                        <Text style={{ fontSize: 20, color: '#cfd8e8', fontWeight: 'bold' }}>Prince Okyere-Ababio</Text>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faGear} size={20} color="#cfd8e8" />
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#2a2a2a',
                        borderRadius: 50,
                        alignSelf: 'center',
                        marginTop: 20,
                        marginBottom: 30
                    }} />





                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 30,
                        marginBottom: 20,
                        paddingHorizontal: 20
                    }}>
                        <Text style={{ color: '#888', fontSize: 14, fontWeight: 'bold' }}>SUMMARY</Text>
                        <Text style={{ color: '#cfd8e8', fontSize: 12 }}>Total Completed: 99%</Text>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 14,
                        marginBottom: 20
                    }}>
                        <TaskStatCard title="Completed" count="25" />
                        <TaskStatCard title="In Progress" count="8" />
                        <TaskStatCard title="Overdue" count="3" />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 14,
                        marginBottom: 20
                    }}>
                        <TaskStatCard title="Total Tasks" count="36" />
                        <TaskStatCard title="This Week" count="12" />
                        <TaskStatCard title="Priority" count="5" />
                    </View>

                    <TabSwitcher />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
});

export default ProfileScreen;