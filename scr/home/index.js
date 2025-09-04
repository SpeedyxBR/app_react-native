import React, { useState } from 'react';
import {Text, View, FlatList } from 'react-native';  
import { navigation } from '../../navigation';
import ItemList from '../home/components/itemlist';

function Home({ navigation }) {

  const [items, setItems] = useState(DATA);

  return (
    <View style={{styles.container}}>
      <FlatList ListFooterComponent={EmpatyList} /> data={items renderItem={({ ItemList })/>}}
    </View>
  );
}

export default Home;
