/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState, useEffect} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  // useColorScheme,
  Platform,
} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todosStroage from './storages/todosStorage';
import AsyncStorage from '@react-native-community/async-storage';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: 'RN basic', done: false},
    {id: 3, text: 'make TodoList', done: false},
  ]);
  const idRef = useRef(4);
  const addTodoListHandler = (todo: string) => {
    setTodos(prev => [...prev, {id: idRef.current, text: todo, done: false}]);
    idRef.current++;
  };

  const onToggleHandler = (id: number) => {
    const modify = todos.map(todo => {
      return todo.id === id ? {...todo, done: !todo.done} : todo;
    });
    setTodos(modify);
  };

  const onRemoveHandler = (id: number) => {
    const removeTodo = todos.filter(todo => todo.id !== id);
    setTodos(removeTodo);
  };

  useEffect(() => {
    todosStroage.get().then(setTodos).catch(console.error);
  }, []);
  useEffect(() => {
    todosStroage.save(todos).catch(console.error);
  }, [todos]);
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead />
          {todos.length === 0 && <Empty />}
          <TodoList
            todos={todos}
            onToggleHandler={onToggleHandler}
            onRemoveHandler={onRemoveHandler}
          />
          <AddTodo addTodoListHandler={addTodoListHandler} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
