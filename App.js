import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={ListScreen} options={{ title: "Mina uppgifter" }} />
        <Stack.Screen name="Detalj" component={DetailScreen} options={{ title: "Uppgiftsdetaljer" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}