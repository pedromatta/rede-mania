import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CartEmpty() {
  return (
    <View style={styles.emptyContainer}>
      <Ionicons name="cart-outline" size={60} color="#ccc" />
      <Text style={styles.emptyText}>Nenhum produto no carrinho.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  emptyText: {
    marginTop: 16,
    fontSize: 18,
    color: '#aaa',
  },
});
