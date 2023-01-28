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
  TouchableOpacity,
  Text,
  View,
  Button,
} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todosStroage from './storages/todosStorage';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
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
  const Stack = createNativeStackNavigator();
  // const [todos, setTodos] = useState([
  //   {id: 1, text: '작업환경 설정', done: true},
  //   {id: 2, text: 'RN basic', done: false},
  //   {id: 3, text: 'make TodoList', done: false},
  // ]);
  // const idRef = useRef(4);
  // const addTodoListHandler = (todo: string) => {
  //   setTodos(prev => [...prev, {id: idRef.current, text: todo, done: false}]);
  //   idRef.current++;
  // };

  // const onToggleHandler = (id: number) => {
  //   const modify = todos.map(todo => {
  //     return todo.id === id ? {...todo, done: !todo.done} : todo;
  //   });
  //   setTodos(modify);
  // };

  // const onRemoveHandler = (id: number) => {
  //   const removeTodo = todos.filter(todo => todo.id !== id);
  //   setTodos(removeTodo);
  // };

  // useEffect(() => {
  //   todosStroage.get().then(setTodos).catch(console.error);
  // }, []);
  // useEffect(() => {
  //   todosStroage.save(todos).catch(console.error);
  // }, [todos]);
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const getHeaderTitle = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    const nameMap = {
      Home: '홈',
      Search: '검색',
      Message: '메세지',
      Notification: '알림',
    };
    return nameMap[routeName];
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        /> */}
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({route}) => {
            return {
              headerShown: false,
              title: getHeaderTitle(route),
            };
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>

      {/* <SafeAreaProvider>
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
      </SafeAreaProvider> */}
    </NavigationContainer>
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
