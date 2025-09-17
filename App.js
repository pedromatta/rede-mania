import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import ScreenA from './components/ScreenA';
import Home from './app/Home'
import Details from './app/Details';
import Cart from './app/Cart';
import About from './app/About';
import { CarrinhoProvider } from './context/CarrinhoContext';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Detalhes" component={Details} options={{ headerShown: false }} />
      <Stack.Screen name="CarrinhoStack" component={Cart} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CarrinhoProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: 'red',
            },
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'white',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
          }}
        >
          <Drawer.Screen
            name="Inicio"
            component={HomeStack}
            options={({ route }) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
              let headerTitle;
              switch (routeName) {
                case 'Home':
                  headerTitle = 'Início';
                  break;
                case 'Detalhes':
                  headerTitle = 'Detalhes';
                  break;
                case 'CarrinhoStack':
                  headerTitle = 'Carrinho';
                  break;
                default:
                  headerTitle = 'Início';
              }
              return {
                headerTitle: headerTitle,
                drawerIcon: ({ focused, color, size }) => (
                  <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                ),
              };
            }}
            listeners={({ navigation }) => ({
              drawerItemPress: (e) => {
                // 1. Previne a ação de navegação padrão
                e.preventDefault();
                // 2. Navega para a tela 'Home' dentro do stack 'Inicio'
                navigation.navigate('Inicio', { screen: 'Home' });
              },
            })}
          />
          <Drawer.Screen
            name="Sobre"
            component={About}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Carrinho"
            component={Cart}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </CarrinhoProvider>
  );
}

