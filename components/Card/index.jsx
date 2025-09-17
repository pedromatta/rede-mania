import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const Card = ({ item, navigation }) => {
  return (
    <View style={styles.card}>
      {/* Imagem do produto */}
      <Image source={{ uri: item.thumbnail }} style={styles.imagem} />

      {/* Título */}
      <Text style={styles.nome}>{item.title}</Text>

      {/* Preço */}
      <Text style={styles.preco}>R$ {item.price.toFixed(2)}</Text>

      {/* Botão de ação */}
      <Pressable style={styles.botao} onPress={() => navigation.navigate("Detalhes", { itemId: item.id })}>
        <Text style={styles.textoBotao}>Detalhes</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 6,
    textAlign: 'center',
  },
  preco: {
    fontSize: 14,
    color: '#2a9d8f',
    marginBottom: 8,
  },
  botao: {
    backgroundColor: '#e76f51',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Card;
