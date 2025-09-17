import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Card from '../components/Card';


export default function Home({ navigation }) {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/groceries')
      .then((response) => response.json())
      .then((data) => {
        setDados(data.products);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dados}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: 'gray' }} />
        )}
      />
    </View>
  );
};
