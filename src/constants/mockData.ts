import { addDays, format } from 'date-fns';

// Generate dates for the horizontal picker
export const dates = Array.from({ length: 10 }).map((_, i) => {
  const date = addDays(new Date(2023, 11, 15), i); // Start from a fixed date for consistency
  return {
    date: format(date, 'd'),
    day: format(date, 'eee'),
  };
});

// Mock task data
export const tasks = [
  {
    id: '1',
    icon: require('../assets/images/meeting.png'),
    title: 'Schedule a meeting with Harshit Sir',
    time: '09:00 AM',
    timeBgColor: '#4A90E2',      // A nice blue
    timeTextColor: '#FFFFFF',    // White text
    tags: ['Habit', 'Must'],
    status: 'completed',
  },
  {
    id: '2',
    icon: require('../assets/images/meditation.png'),
    title: '2.5 Hours Simran and Meditation',
    time: '09:00 AM',
    timeBgColor: '#E8D7F2',      // Light purple
    timeTextColor: '#8B5FBF',    // Dark purple text
    tags: ['Habit', 'Must'],
    status: 'pending',
  },
  {
    id: '3',
    icon: require('../assets/images/save-money.png'),
    title: 'Save 200 Rupees Daily',
    time: '12:00 PM',
    timeBgColor: '#FFF2CC',      // Light yellow
    timeTextColor: '#F5A623',    // Dark yellow/orange text
    tags: ['Habit', 'Must'],
    status: 'special',
  },
  {
    id: '4',
    icon: require('../assets/images/walk.png'),
    title: 'Walk 10k Step Daily',
    time: '07:00 AM',
    timeBgColor: '#D8F3DC',      // Light green
    timeTextColor: '#50C878',    // Dark green text
    tags: ['Habit', 'Important'],
    status: 'pending',
  },
  {
    id: '5',
    icon: require('../assets/images/buy-flower.png'),
    title: 'Buy Sunflower for Mumma',
    time: '11:00 AM',
    timeBgColor: '#FFEACC',      // Light orange
    timeTextColor: '#F5A623',    // Dark orange text
    tags: ['Task', 'Important'],
    status: 'arrow',
  },
  {
    id: '6',
    icon: require('../assets/images/mandala.png'),
    title: 'Make Mandala and Colour Daily',
    time: '07:30 PM',
    timeBgColor: '#D1F2EB',      // Light teal
    timeTextColor: '#4DB6AC',    // Dark teal text
    tags: ['Task', 'Important'],
    status: 'pending',
  },
];

// Modal options data
export const modalOptions = [
    {
        icon: require('../assets/images/Vector.png'),
        title: 'Habit',
        description: 'Activity that repeats over time it has detailed tracking and statistics.',
    },
    {
        icon: require('../assets/images/2.png'),
        title: 'Recurring Task',
        description: 'Activity that repeats over time it has detailed tracking and statistics.',
    },
    {
        icon: require('../assets/images/3.png'),
        title: 'Task',
        description: 'Single instance activity without tracking over time.',
    },
    {
        icon: require('../assets/images/4.png'),
        title: 'Goal of the Day',
        description: 'A specific target set for oneself to achieve within a single day.',
    },
];