// src/components/TaskItem.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../hooks/useTheme';

type Props = {
  icon: ImageSourcePropType;
  title: string;
  time: string;
  timeBgColor: string;
  timeTextColor: string;
  tags: string[];
  status: 'completed' | 'pending' | 'arrow' | 'special';
};

const TaskItem: React.FC<Props> = ({ icon, title, time,timeBgColor,
  timeTextColor, tags, status }) => {
  const colors = useTheme();

  const renderStatus = () => {
    switch (status) {
      case 'completed':
        return <Icon name="checkmark-circle" size={24} color={colors.success} />;
      case 'pending':
        return <View style={[styles.pendingCircle, { borderColor: colors.subtext }]} />;
      case 'arrow':
        return <Icon name="chevron-forward-outline" size={24} color={colors.subtext} />;
      case 'special':
        return <Icon name="timer-outline" size={24} color={colors.text} />;
      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      {/*
        THIS IS THE FIX.
        The 'icon' prop (which is a number) is being passed to the 'source' prop of the <Image> component.
        This is the correct way to render an image from a require() call.
      */}
      <Image source={icon} style={styles.iconImage} />

      <View style={styles.detailsContainer}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <View style={styles.infoContainer}>
          {/* Create the colored "pill" for the time */}
          <View style={[styles.timeContainer, { backgroundColor: timeBgColor }]}>
            <Icon name="time-outline" size={14} color={timeTextColor} />
            <Text style={[styles.timeText, { color: timeTextColor }]}>{time}</Text>
          </View>

          {/* Display the other tags next to it */}
          <Text style={[styles.tagText, { color: colors.subtext }]}>{tags.join(' | ')}</Text>
        </View>
      </View>
      {renderStatus()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    
    marginHorizontal: 16,
    marginBottom: 8,
    
    
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  iconImage: {
    width: 55,
    height: 55,
    marginRight: 14,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 12,
    marginLeft: 4,
  },
  separator: {
    height: '60%',
    width: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginRight: 8, // Adds space between the pill and the tags
  },
  // NEW: Style for the text inside the pill
  timeText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  // RENAMED from 'infoText' for clarity
  tagText: {
    fontSize: 12,
  },
  pendingCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E7E7E7'
  },
});

export default TaskItem;