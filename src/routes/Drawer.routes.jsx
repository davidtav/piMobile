import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import TabRoutes from "./Tab.routes"

export default function DrawerRoutes() {
    const Drawer = createDrawerNavigator();
  return (
   <Drawer.Navigator screenOptions={{title:"Menu"}}>
    <Drawer.Screen
        name="Home"
        component={TabRoutes}
        initialParams={{screen:"Home"}}
        options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />          
            ),
              drawerLabel:"Home"
          }}
    />
     <Drawer.Screen
            name="Posts"
            component={TabRoutes}
            initialParams={{screen:"Posts"}}
            options={{
                drawerIcon: ({ color, size }) => (
                  <Feather name="plus-circle" color={color} size={size} />          
                ),
                  drawerLabel:"Posts"
              }}
        />
     <Drawer.Screen
            name="Friends"
            component={TabRoutes}
            initialParams={{screen:"Friends"}}
            options={{
                drawerIcon: ({ color, size }) => (
                  <Feather name="user" color={color} size={size} />          
                ),
                  drawerLabel:"Friends"
              }}
        />
   </Drawer.Navigator>
  )
}