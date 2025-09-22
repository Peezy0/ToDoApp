// components/ListItem.tsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { LKText } from '../General';

export interface ListItemProps {
    title: string;
    onPress?: () => void;          // tap the row
    onCompletePress?: () => void;  // tap the circle on the right
}

const ListItem = React.memo<ListItemProps>(
    ({ title, onPress, onCompletePress }) => (
        <View
            style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingLeft: 16,
                marginBottom: 30,
                paddingRight: 20,
            }}>
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row' }}
                onPress={onPress}>
                <FontAwesomeIcon icon={faBriefcase} size={19} color="white" />
                <LKText
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                        color: 'white',
                        fontSize: 19,
                        paddingLeft: 8,
                        borderLeftWidth: 2,
                        borderLeftColor: 'white',
                        marginLeft: 8,
                    }}>
                    {title}
                </LKText>
            </TouchableOpacity>

            <TouchableOpacity onPress={onCompletePress} style={{ marginLeft: 35 }}>
                <FontAwesomeIcon icon={faCircle} size={19} color="white" />
            </TouchableOpacity>
        </View>
    ),
);

export default ListItem;
