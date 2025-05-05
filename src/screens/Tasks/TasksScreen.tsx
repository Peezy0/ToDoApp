import { StyleSheet, SafeAreaView, ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { LKText } from '../../components/General';
import ListItem from '../../components/General/ListItem';


const TaskScreen = React.memo(() => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: .85 }} colors={['#3a3a3a', '#000000']} style={{ flex: 1 }} >
            <ScrollView>
                <SafeAreaView>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <LKText weight={'bold'} style={{ fontSize: 20, color: '#cfd8e8' }}>Tasks</LKText>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 50, justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <LKText style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 35 }}>Tasks</LKText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <LKText style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 30 }}>Projects</LKText>
                        </TouchableOpacity>


                    </View>
                </SafeAreaView>
            </ScrollView>
        </LinearGradient>
    )


});
const styles = StyleSheet.create({
    button: {
        width: 150,
        padding: 20,
        borderRadius: 60,
        backgroundColor: '#cfd8e8',
        height: 60
    }




})
export default TaskScreen