import { SafeAreaView, ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';

import { createDefaultStyles } from '../../config/defaults/defaultStyles';
import { createScreenStyles } from './screenStyle';
import { useTheme } from '../../config/theme/Theme.context';
import LinearGradient from 'react-native-linear-gradient';
import { LKText } from '../../components/General';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';




const HomeScreen = React.memo(() => {
  const defaultStyles = createDefaultStyles();
  const screenStyles = createScreenStyles();
  const { theme } = useTheme();


  //<{}> is me defining what props I can use
  const RecText = React.memo<{ backgroundColor: string }>(({ backgroundColor }) => {

    return (
      <TouchableOpacity style={[screenStyles.button, { backgroundColor: backgroundColor }]}>


      </TouchableOpacity>
    );

  });


  const MoreButton = () => {

    return (
      <TouchableOpacity>
        <Text style={{ color: 'white', opacity: .7 }}>More</Text>

      </TouchableOpacity>
    );

  };

  const TitleLine = React.memo<{ children?: React.ReactNode; style?: StyleProp<ViewStyle>; }>(({ children, style }) => {

    return (

      <View style={[style, { flexDirection: 'row', marginTop: 50, alignItems: 'center', marginRight: 16 }]}>
        <LKText weight={'medium'} style={{ flex: 1, fontSize: 22, color: 'white' }}>{children}</LKText>
        <MoreButton></MoreButton>



      </View>

    );

  });

  const ListItem = React.memo<{ children?: React.ReactNode; }>(({ children }) => {
    return (
      <View style={{ alignItems: 'center', flexDirection: 'row', paddingLeft: 16, marginBottom: 30, paddingRight: 20 }}>
        <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>

          <FontAwesomeIcon icon={faBriefcase} size={19} color={'white'} />
          <LKText numberOfLines={1} ellipsizeMode={'tail'} style={{ color: 'white', fontSize: 19, paddingLeft: 8, borderLeftWidth: 2, borderLeftColor: 'white', marginLeft: 8, }}>{children}</LKText>

        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 35 }}>
          <FontAwesomeIcon icon={faCircle} size={19} color={'white'} />
        </TouchableOpacity>
      </View>
    );


  });



  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3a3a3a', '#000000']} style={{ flex: 1 }} >
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', marginTop: 1, }}>
            <LKText weight={"medium"} style={{ fontSize: 30, color: 'white' }}>Dashboard</LKText>

            <LKText weight={'light'} style={{ fontSize: 15, color: 'white' }}>Make today better than tommorow!</LKText>
          </View>
          <View style={{ marginTop: 30, paddingLeft: 16 }}>
            <TitleLine style={{ marginBottom: 20 }}>Projects</TitleLine>


            <ScrollView horizontal>
              <View style={{ flexDirection: 'row' }}>
                <RecText backgroundColor='#24bdf2'></RecText>
                <RecText backgroundColor="#eeb525"></RecText>
              </View>
            </ScrollView>
          </View>
          <View style={{ paddingLeft: 16 }}>
            <TitleLine >Todays Task</TitleLine>

          </View>

          <View style={{ marginTop: 25 }}>
            <ListItem>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi qui dolore, totam natus magni alias suscipit quia eum nihil! Consectetur incidunt laboriosam facere labore quos possimus in animi culpa quam?</ListItem>
            <ListItem>Rob is the goat</ListItem>
            <ListItem>Rob is the goat</ListItem>
            <ListItem>Rob is the goat</ListItem>



          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
});

export default HomeScreen