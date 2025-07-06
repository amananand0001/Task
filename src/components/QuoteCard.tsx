// src/components/QuoteCard.tsx

import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../hooks/useTheme';

const QuoteCard = () => {
  const colors = useTheme();
  const { width } = useWindowDimensions();
  const progress = 65; // The progress percentage (0-100)

  // --- Style Constants for the Progress Bar ---
  const progressBarHeight = 8;
  const thumbSize = 20; // The diameter of the circular thumb

  // --- Calculations for Positioning ---
  // The total width available for the progress bar inside the card
  const barTotalWidth = width - 40 * 2; // (Screen width) - (2 * card padding)
  
  // The width of the filled portion of the bar
  const progressWidth = (barTotalWidth * progress) / 100;
  
  // The position of the thumb. We subtract half its size to center it at the end of the bar.
  const thumbPosition = progressWidth - (thumbSize / 2);

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={[styles.title, { color: colors.text }]}>Today's Quote</Text>
      <Text style={[styles.quote, { color: colors.subtext }]}>
        "You must do the things, you think you cannot do."
      </Text>
      
      {/* --- Custom Progress Bar Implementation --- */}
      <View style={styles.progressSection}>
        <Text style={[styles.progressText, { color: colors.text }]}>Progress {progress}%</Text>
        
        <View style={styles.progressContainer}>
          {/* 1. The background track of the progress bar */}
          <View style={[styles.progressBarBackground, { backgroundColor: colors.inactive, height: progressBarHeight }]} />

          {/* 2. The filled gradient bar */}
          <LinearGradient
            colors={[colors.secondary, colors.primary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.progressBarFill,
              { 
                width: progressWidth,
                height: progressBarHeight,
              },
            ]}
          />

          {/* 3. The glowing circular thumb at the end of the bar */}
          <LinearGradient
            colors={[`${colors.secondary}99`, `${colors.primary}ff`]} // Lighter/transparent center to solid edge
            style={[
              styles.progressThumb,
              {
                width: thumbSize,
                height: thumbSize,
                borderRadius: thumbSize / 2,
                left: thumbPosition, // Position it dynamically
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    paddingBottom: 20,
    paddingLeft:20,
    paddingRight:20,
    marginHorizontal: 16,
    marginVertical: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  quote: {
    fontSize: 14,
    fontWeight:'600',
    marginBottom: 6,
  },
  progressSection: {},
  progressText: {
    fontSize: 12,
    fontWeight:'600',
    marginBottom: 6,
    color: '#151B73',
  },
  // Container for all progress bar elements, allows absolute positioning
  progressContainer: {
    justifyContent: 'center',
  },
  // The light grey track that sits in the background
  progressBarBackground: {
    width: '100%',
    borderRadius: 10,
  },
  // The gradient bar that shows the actual progress
  progressBarFill: {
    position: 'absolute',
    borderRadius: 10,
  },
  // The glowing circular thumb
  progressThumb: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)', // A subtle white border to make it pop
  },
});

export default QuoteCard;