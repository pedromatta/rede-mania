import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';
import CartItem from '../components/CartItem'
import CartConfirm from '../components/CartConfirm'
import CartSummary from '../components/CartSummary';
import CartEmpty from '../components/CartEmpty';

export default function Cart() {
  const { carrinho } = useCarrinho();

  if (!carrinho || carrinho.length === 0) {
    return (
      <CartEmpty />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20, marginTop: 10 }}
      />
      <CartConfirm />
      <CartSummary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
});
