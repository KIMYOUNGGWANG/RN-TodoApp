import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';

const todosStroage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);
      if (!rawTodos) {
        throw new Error('no saved todos');
      }
      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('failed to load todos');
    }
  },
  save: async (data: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log('fail');
    }
  },
};

export default todosStroage;
