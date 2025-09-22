import { SafeAreaView, ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { LKText } from '../../components/General';






const ProfileScreen = React.memo(() => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: .85 }} colors={['#3a3a3a', '#000000']} style={{ flex: 1 }} >
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between', // Horizont
                    alignItems: 'center', // Vertically center
                    marginTop: 10,
                    paddingLeft: 90,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#cfd8e8'
                }}>

                    <Text style={{ fontSize: 20, color: '#cfd8e8', fontWeight: 'bold' }}>Prince Okyere-Ababio</Text>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faGear} size={20} color="#cfd8e8" />
                    </TouchableOpacity>


                </View>
                <View style={{ width: 125, height: 125, backgroundColor: 'black', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', borderRadius: 35, alignSelf: 'flex-end', marginTop: 40, marginRight: 30 }}>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, }}>
                    <View style={{ paddingLeft: 50 }}>
                        <Text style={{ color: '#f1f1f1ff', fontSize: 11, fontWeight: 'bold' }}>SUMMARY</Text>
                    </View>
                    <View style={{ paddingRight: 60, paddingTop: 0 }}>
                        <TouchableOpacity style={{ paddingVertical: 0, flexDirection: 'row' }}>
                            <Text style={{ color: '#cfd8e8', fontSize: 10, fontWeight: 'bold' }}>This month</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, paddingHorizontal: 20 }}>
                    <View style={{ paddingLeft: 30 }}>
                        <LKText weight={'bold'} style={{ fontSize: 12, color: '#6a6a6aff' }}>Total Completed Tasks</LKText>
                    </View>
                    <View style={{ paddingRight: 40 }}>
                        <LKText weight={'bold'} style={{ fontSize: 12, color: '#f1f1f1ff' }}>99%</LKText>
                    </View>





                </View>


            </SafeAreaView>
        </LinearGradient >
    )


});
export default ProfileScreen