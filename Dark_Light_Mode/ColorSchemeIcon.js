import Ionicons from 'react-native-vector-icons/Ionicons';

const ColorSchemeIcon = ({colorScheme, onPress}) => {
  const iconNAme = colorScheme === 'dark' ? 'moon' : 'sunny';
  const iconColor = 'white';
  return (
    <Ionicons name={iconNAme} size={24} color={iconColor} onPress={onPress} />
  );
};
export default ColorSchemeIcon;
