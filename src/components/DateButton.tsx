// src/components/DateButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

type Props = {
  day: string;
  date: string;
  isSelected: boolean;
  onPress: () => void;
};

// Define the custom colors for the selected state
const selectedColors = {
  dayBackground: '#2C3399',
  dateBackground: '#151B73',
};

const DateButton: React.FC<Props> = ({ day, date, isSelected, onPress }) => {
  const colors = useTheme();

  // Styles for the text, which will be white when selected
  const dayStyle = {
    ...styles.dayText,
    color: isSelected ? colors.white : colors.subtext,
  };
  const dateStyle = {
    ...styles.dateText,
    color: isSelected ? colors.white : colors.text,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        // The background color of the container depends on the selected state
        { backgroundColor: isSelected ? selectedColors.dateBackground : colors.card },
      ]}
    >
      {/* Top half of the button for the Day */}
      <View
        style={[
          styles.halfContainer,
          // This view gets the specific day background color only when selected
          { backgroundColor: isSelected ? selectedColors.dayBackground : 'transparent',
            
           },
        ]}
      >
        <Text style={dayStyle}>{day}</Text>
      </View>

      {/* Bottom half of the button for the Date */}
      <View
        style={[
          styles.halfContainer,
          // This view's background is transparent, showing the container's color
          { backgroundColor: 'transparent',
            borderRadius: 25,
           },
        ]}
      >
        <Text style={dateStyle}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 55,
    borderRadius: 15,
    marginHorizontal: 5,
    // overflow: 'hidden' is crucial to ensure children respect the border radius
    overflow: 'hidden',
  },
  // A new style for the top and bottom halves
  halfContainer: {
    flex: 1, // This makes each half take up 50% of the space
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 11,
    fontWeight: '500',
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default DateButton;