import React, {useEffect} from 'react';
import {Button, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

const DetailScreen = ({route, navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: `상세보기 - ${route.params.id}`,
    });
  }, [navigation]);
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id:{route.params.id}</Text>
      <Button
        title="다음"
        onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
      />
      <Button title="뒤로가기" onPress={() => navigation.pop()} />
      <Button title="처음으로" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});
export default DetailScreen;
