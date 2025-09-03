import React, { useState } from 'react';
import { Button, Text, View, FlatList } from 'react-native';

function ItemList({ item }) {
  return (
    <View
      style={{
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#f9c2ff',
        height: 50,
        justifyContent: 'center',
      }}
    >
      <Text>{item.name}</Text>
    </View>
  );
}

function Home({ navigation }) {
  const DATA = [
    { id: '1', name: 'Item 1', done: true },
    { id: '2', name: 'Item 2', done: true },
    { id: '3', name: 'Item 3', done: true },
  ];

  const [items, setItems] = useState(DATA);

  const addItem = () => {
    const nextId = (items.length + 1).toString();
    setItems((prev) => [...prev, { id: nextId, name: `Item ${nextId}`, done: false }]);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemList item={item} />}
        style={{ width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
      />

      {/* Corrigido: usar apenas um onPress (handler addItem já definido) */}
      <Button
        title="Adicionar Atividade"
        onPress={addItem}
      />

    </View>
  );
}

export default Home;
