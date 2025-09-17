import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useCarrinho } from '../../context/CarrinhoContext';

export default function CartSummary() {
  const { precoTotal } = useCarrinho();
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.totalText}>Total:</Text>
      <Text style={styles.totalPrice}>R$ {precoTotal.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
});
