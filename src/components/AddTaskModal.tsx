import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../hooks/useTheme';
import { modalOptions } from '../constants/mockData';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const AddTaskModal: React.FC<Props> = ({ isVisible, onClose }) => {
  const colors = useTheme();
  const translateY = useSharedValue(500);
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    if (isVisible) {
      translateY.value = withSpring(0, { damping: 15 });
    } else {
      translateY.value = withTiming(500, { duration: 300 });
    }
  }, [isVisible, translateY]);

  if (!isVisible) return null;

  return (
    <>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <Animated.View
        style={[
          styles.modalContainer,
          { backgroundColor: colors.card, paddingBottom: insets.bottom > 0 ? insets.bottom : 20 },
          animatedStyle,
        ]}
      >
        {modalOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionButton}>
            <View style={[styles.iconWrapper, { backgroundColor: colors.background }]}>
              {typeof option.icon === 'string' ? (
                <Icon name={option.icon} size={24} color={colors.primary} />
              ) : (
                <Image source={option.icon} style={styles.imageIcon} />
              )}
            </View>
            <View style={styles.textWrapper}>
              <Text style={[styles.optionTitle, { color: colors.text }]}>{option.title}</Text>
              <Text style={[styles.optionDescription, { color: colors.subtext }]}>{option.description}</Text>
            </View>
            <Icon name="chevron-forward-outline" size={24} color={colors.subtext} />
          </TouchableOpacity>
        ))}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  imageIcon: {
    width: 24,
    height: 24,
  },
  textWrapper: {
    flex: 1,
    marginRight: 10,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionDescription: {
    fontSize: 13,
    marginTop: 2,
  },
});

export default AddTaskModal;