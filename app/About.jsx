import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';

export default function About({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/Logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Rede Mania</Text>
          <Text style={styles.subtitle}>
            Sua paixão por comida, nossa mania de entregar o melhor. {'\n\n'} {'\n\n'}

            Sobre nós
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.description}>
            Bem-vindo à Rede Mania! Nascemos do amor pela boa comida e do desejo de conectar pessoas a alimentos frescos e de alta qualidade. Nossa 'mania' é selecionar cuidadosamente cada produto, desde os vegetais colhidos no ponto certo até os itens artesanais que contam uma história de sabor e tradição.
            {'\n\n'}
            Acreditamos que comer bem é um dos maiores prazeres da vida. Por isso, trabalhamos em parceria com produtores locais e fornecedores de confiança para garantir que você receba em sua casa não apenas ingredientes, mas uma experiência completa de frescor e qualidade.
            {'\n\n'}
            Junte-se a nós e descubra um jeito mais prático e saboroso de fazer suas compras.
          </Text>
        </View>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Inicio")}>
          <Text style={styles.buttonText}>Voltar para pagina inicial</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingVertical: 75
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    textAlign: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ff0000',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  content: {
    marginBottom: 30,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
    color: '#555',
  },
  button: {
    backgroundColor: '#ff0000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

