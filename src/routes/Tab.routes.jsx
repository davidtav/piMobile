import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../Pages/Home";
import Posts from "../Pages/Posts";
import Clima from "../Pages/Clima";
import Calendario from "../Pages/Calendario";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown:true}}>
    <Tab.Screen 
     name="Home"
     component={Home}
     options={{
        tabBarIcon:({color,size})=>(
            <Feather name="home" color={color} size={20}/>
        )
     }}
    />
     <Tab.Screen 
     name="Clima"
     component={Clima}
     options={{
        tabBarIcon:({color,size})=>(
            <Feather name="thermometer" color={color} size={20}/>
        )
     }}/>
    <Tab.Screen 
     name="Planejamento"
     component={Posts}
     options={{
        tabBarIcon:({color,size})=>(
            <Feather name="layout" color={color} size={20}/>
        )
     }}/>
   
    <Tab.Screen 
     name="Calendario"
     component={Calendario}
     options={{
        tabBarIcon:({color,size})=>(
            <Feather name="calendar" color={color} size={20}/>
        )
     }}/>
</Tab.Navigator>
  );
}
