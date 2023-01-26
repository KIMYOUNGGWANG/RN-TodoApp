import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
interface Props {
  item: {
    id: number;
    text: string;
    done: boolean;
  };
  onToggleHandler: (id: number) => void;
  onRemoveHandler: (id: number) => void;
}
const TodoItem: React.FC<Props> = ({
  item,
  onToggleHandler,
  onRemoveHandler,
}) => {
  const deleteIcon = <Icon name="delete" size={32} color="red" />;
  const remove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '삭제',
          onPress: () => onRemoveHandler(item.id),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggleHandler(item.id)}>
        <View style={[styles.circle, item.done && styles.filled]}>
          {item.done && (
            <Image
              source={require('../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>

      <Text style={[styles.text, item.done && styles.lineThrough]}>
        {item.text}
      </Text>
      <TouchableOpacity onPress={remove}>
        <View>{deleteIcon}</View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
