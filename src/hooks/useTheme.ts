import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from '../constants/colors';

export const useTheme = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  return isDarkMode ? darkColors : lightColors;
};