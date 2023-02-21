import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Button,
  Alert,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from 'react-native';

const App = () => {
  //const colorScheme = useColorScheme();
  const [state, setState] = React.useState(useColorScheme());

  // Define styles for light theme

  const lightStyles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
    },
    text: {
      color: '#000',
    },
  });

  // Define styles for dark theme
  const darkStyles = StyleSheet.create({
    container: {
      padding: 20,

      backgroundColor: '#000',
    },
    text: {
      color: '#fff',
    },
  });

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    Home: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  //onclick event handler
  const toggleColor = e => {
    setState(state === 'dark' ? 'light' : 'dark');
  };

  return (
    <View
      style={[
        styles.container,
        state === 'dark' ? darkStyles.container : lightStyles.container,
      ]}>
      <Text style={state === 'dark' ? darkStyles.text : lightStyles.text}>
        {state} theme
      </Text>
      <TouchableOpacity>
        <Switch value={state === 'dark'} onValueChange={toggleColor} />
        {/* <Button title="Toggle Color" onPress={toggleColor} /> */}
      </TouchableOpacity>
      <View style={styles.Home}>
        <Text
          style={[
            styles.Home,
            state === 'dark' ? darkStyles.text : lightStyles.text,
          ]}>
          Home
        </Text>
      </View>
    </View>
  );
};

export default App;
