import { StyleSheet } from 'react-native';
import { Theme } from '../../config/theme/Theme.interface';
import { useThemeAwareObject } from '../../hooks';

export const createScreenStyles = () =>
  useThemeAwareObject((theme: Theme) => {
    return StyleSheet.create({
      button: {
        width: 200,
        height: 260,
        borderRadius: 20,
        marginRight: 16,

      },
      MoreBut: {
        width: 38,





      }




    });
  });
