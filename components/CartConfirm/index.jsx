import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useCarrinho } from '../../context/CarrinhoContext';
import { useNavigation } from '@react-navigation/native';
import CartConfirmModal from '../CartConfirmModal';

export default function CartConfirm() {
  const [modalVisivel, setModalVisivel] = useState(false);

  const { limparCarrinho } = useCarrinho();
  const navigation = useNavigation();

  const confirmarPedido = () => {
    setModalVisivel(false);
    limparCarrinho();
    navigation.navigate('Inicio', { screen: 'Home' });
  };

  return (
    <>
      <View style={styles.confirmContainer}>
        <Pressable
          style={styles.confirmButton}
          onPress={() => setModalVisivel(true)}
        >
          <Text style={styles.confirmText}>Confirmar</Text>
        </Pressable>
      </View>

      <CartConfirmModal
        visible={modalVisivel}
        onConfirm={confirmarPedido}
        onCancel={() => setModalVisivel(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  confirmContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  confirmButton: {
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#e76f51",
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fff",
  },
});
