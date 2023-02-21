import React, {useState} from 'react';

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
  Button,
} from 'react-native';

const AppPro = () => {
  const [color, setColor] = useState('black');
  //chnage backcolor based on the color state
  const isDarkMode = useColorScheme();

  const toggleColor = () => {
    color === 'black' ? setColor('white') : setColor('black');
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Hello World {color} {isDarkMode}
        </Text>
        <Button title="Toggle Color" onPress={toggleColor} />
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
