import { SafeAreaView, ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


const ProfileScreen = React.memo(() => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: .85 }} colors={['#3a3a3a', '#000000']} style={{ flex: 1 }} >
            <SafeAreaView>
                <Text>This is the profile screen</Text>
            </SafeAreaView>
        </LinearGradient>
    )


});
export default ProfileScreen