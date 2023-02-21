import React from 'react';

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const AppPro = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <Text>Hello World </Text>
      </View>
    </SafeAreaView>
  );
};

//for styling we can use StyleSheet.create({}) and then use the styles in the components
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
});
export default AppPro;
