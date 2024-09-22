import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Feather} from "@expo/vector-icons"
import Home from "../Pages/Home"
import Posts from "../Pages/Posts"
import Profile from "../Pages/Profile"
const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(
        <Tab.Navigator screenOptions={{headerShown:true}}>
            <Tab.Screen 
             name="Home"
             component={Home}
             options={{
                tabBarIcon:({color,size})=>(
                    <Feather name="home" color={color} size={size}/>
                )
             }}
            />
            <Tab.Screen 
             name="Posts"
             component={Posts}
             options={{
                tabBarIcon:({color,size})=>(
                    <Feather name="plus-circle" color={color} size={size}/>
                )
             }}/>
            <Tab.Screen 
             name="Profile"
             component={Profile}
             options={{
                tabBarIcon:({color,size})=>(
                    <Feather name="user" color={color} size={size}/>
                )
             }}/>
        </Tab.Navigator>
    )
}