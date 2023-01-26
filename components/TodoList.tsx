import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem';

interface Props {
  todos: {text: string; id: number; done: boolean}[];
  onToggleHandler: (id: number) => void;
  onRemoveHandler: (id: number) => void;
}
const TodoList: React.FC<Props> = ({
  todos,
  onToggleHandler,
  onRemoveHandler,
}) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          item={item}
          onToggleHandler={onToggleHandler}
          onRemoveHandler={onRemoveHandler}
        />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
export default TodoList;
