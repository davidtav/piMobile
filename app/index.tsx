import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../src/routes/Routes";
import Start from "../src/Screens/Start";
import Login from "../src/Screens/Login";
import Register from "../src/Screens/Register";
 
export default function Index() {
  const Stack = createNativeStackNavigator();
  return ( 
<>
<Stack.Navigator initialRouteName="Start">
<Stack.Screen 
      name="Start" 
      component={Start} 
      options={{ headerShown: false }}
      />
<Stack.Screen 
      name="Login" 
      component={Login} 
      options={{ headerShown: false }}
      />
<Stack.Screen 
      name="Register" 
      component={Register} 
      options={{ headerShown: false }}
      />
<Stack.Screen 
      name="Routes" 
      component={Routes} 
      options={{ headerShown: false }}
      />      
</Stack.Navigator>
</>
  );
}