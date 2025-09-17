import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCarrinho } from '../context/CarrinhoContext'

export default function Details({ route, navigation }) {
  const { itemId } = route.params;
  const { quantidadeTotal, adicionar } = useCarrinho();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${itemId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#b872ff" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("CarrinhoStack")} style={styles.cartIconContainer}>
          <Ionicons name="cart-outline" size={32} color="#F44336" />
          {quantidadeTotal > 0 && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{quantidadeTotal}</Text>
            </View>
          )}
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.actions}>
        <Text style={styles.title}>{product.title || 'Sem nome'}</Text>
        <Text style={styles.description}>
          {product.description || 'Descrição não disponível'}
        </Text>

        <Pressable style={styles.button} onPress={() => adicionar(product)}>
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEB3B',
    gap: 20,
    padding: 20,
  },

  header: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },

  imageContainer: {
    width: 280,
    height: 280,
    backgroundColor: '#FFC10780',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    marginBottom: 20,
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 16,
  },

  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#FFC10780',
    width: '100%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#F44336',
    alignItems: 'center',
    gap: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 32,
    marginTop: 10,
    width: '60%',
  },

  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },

  cartIconContainer: {
    padding: 4,
  },
  badgeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,

    backgroundColor: '#F44336',
    borderRadius: 10,
    width: 20,
    height: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
