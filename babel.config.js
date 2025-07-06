module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ... any other plugins you might have
    // Add this line as the last item in the plugins array
    'react-native-reanimated/plugin',
  ],
};
