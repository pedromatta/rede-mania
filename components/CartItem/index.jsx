import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCarrinho } from '../../context/CarrinhoContext';

export default function CartItem({ item }) {
  const { remover, incrementar, decrementar } = useCarrinho();
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />

      <View style={styles.itemDetails}>

        <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>

        <View style={styles.quantityControls}>
          <Pressable onPress={() => decrementar(item.id)} style={styles.controlButton}>
            <Ionicons name="remove-circle-outline" size={28} color="#e76f51" />
          </Pressable>
          <Text style={styles.quantity}>{item.quantidade}</Text>
          <Pressable onPress={() => incrementar(item.id)} style={styles.controlButton}>
            <Ionicons name="add-circle-outline" size={28} color="#2a9d8f" />
          </Pressable>
        </View>
      </View>

      <Pressable onPress={() => remover(item.id)} style={styles.removeButton}>
        <Ionicons name="trash-outline" size={24} color="#c1121f" />
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    padding: 4,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  removeButton: {
    marginLeft: 16,
    padding: 8,
  },
});
