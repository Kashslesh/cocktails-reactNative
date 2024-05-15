import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import Favorites from "./src/screens/Favorites";
import Search from "./src/screens/Search";
import Details from "./src/screens/Details";
import {Avatar} from "react-native-paper"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux'
import Store from "./src/store/Store";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
    let amountFavorites;
    useEffect(() => {
        amountFavorites = Store.getState().favorite.listFavorites.length > 0 ? Store.getState().favorite.listFavorites.length + 1 : null
    }, [Store.getState().favorite.listFavorites.length]);

  return (
      <Provider store={Store}>
          <NavigationContainer>
              <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel : false }}>
                  <Tab.Screen  options={{
                      tabBarIcon: ({ color, size }) => (
                          <Avatar.Icon icon="glass-cocktail" size={35} style={{ backgroundColor:'transparent'}} color='red'/>
                      ),
                  }}
                   name="Cocktails" component={Home}/>
                  <Tab.Screen
                      options={{
                          tabBarIcon: ({ color, size }) => (
                              <Avatar.Icon icon="star" size={35} style={{ backgroundColor:'transparent'}} color='red'/>
                          ),
                          tabBarBadge: amountFavorites,
                      }}
                      name="Favorites" component={Favorites}/>
                  <Tab.Screen
                      options={{
                          tabBarIcon: ({ color, size }) => (
                              <Avatar.Icon icon="search-web" size={35} style={{ backgroundColor:'transparent'}} color='red'/>
                          ),
                      }}
                      name="Search" component={Search}/>
              </Tab.Navigator>
          </NavigationContainer>
      </Provider>
  );
}
