import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../hooks/useTheme';
import { dates, tasks } from '../constants/mockData';
import { SafeAreaView } from 'react-native-safe-area-context'; 
// Import Components
import DateButton from '../components/DateButton';
import QuoteCard from '../components/QuoteCard';
import TaskItem from '../components/TaskItem';
import AddTaskModal from '../components/AddTaskModal';

const HomeScreen = () => {
  const colors = useTheme();
  const [selectedDate, setSelectedDate] = useState('18');
  const [modalVisible, setModalVisible] = useState(false);

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={[styles.appName, { color: colors.text }]}>WingsFly</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity>
          <Icon name="search-outline" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 16 }}>
          <Icon name="calendar-outline" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="help-circle-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={dates}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.date}
          renderItem={({ item }) => (
            <DateButton
              day={item.day}
              date={item.date}
              isSelected={item.date === selectedDate}
              onPress={() => setSelectedDate(item.date)}
            />
          )}
          contentContainerStyle={styles.dateListContainer}
        />
        <QuoteCard />
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            icon={task.icon}
            title={task.title}
            time={task.time}
            tags={task.tags}
            status={task.status as any}
          />
        ))}
         <View style={{height: 80}} />
      </ScrollView>

      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.primary }]}
        onPress={() => setModalVisible(true)}>
        <Icon name="add" size={32} color={colors.white} />
      </TouchableOpacity>

      <AddTaskModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: 'row',
  },
  dateListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default HomeScreen;