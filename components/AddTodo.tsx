import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

interface Props {
  addTodoListHandler: (todo: string) => void;
}
const AddTodo: React.FC<Props> = ({addTodoListHandler}) => {
  const [inputValue, setInputValue] = useState('');
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  const onPressHandler = () => {
    addTodoListHandler(inputValue);
    setInputValue('');
    Keyboard.dismiss();
  };
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력해주세요."
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={onPressHandler}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPressHandler}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPressHandler}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});
export default AddTodo;
