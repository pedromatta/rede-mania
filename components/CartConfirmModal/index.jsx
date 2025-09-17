import { View, Text, Pressable, StyleSheet, Modal } from 'react-native';

export default function CartConfirmModal({ visible, onConfirm, onCancel }) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Finalizar Pedido?</Text>
          <Text style={styles.modalText}>Tem certeza que quer finalizar o pedido?</Text>
          <View style={styles.modalButtonContainer}>
            <Pressable
              style={[styles.modalButton, styles.noButton]}
              onPress={onCancel}
            >
              <Text style={styles.noButtonText}>Não</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, styles.yesButton]}
              onPress={onConfirm}
            >
              <Text style={styles.yesButtonText}>Sim</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  noButton: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  noButtonText: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 16,
  },
  yesButton: {
    backgroundColor: '#2a9d8f',
  },
  yesButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
