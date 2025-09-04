import React from 'react';


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

export default ItemList;