import {Text, View, TextInput} from 'react-native';

const MadeInput = ({
  label,
  styleContainer,
  styleText,
  style,
  onChangeText,
  value,
  keyboardType,
}) => {
  return (
    <View style={styleContainer}>
      <View>
        <Text style={styleText}>{label}</Text>
      </View>
      <TextInput
        autoFocus
        style={style}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default MadeInput;
