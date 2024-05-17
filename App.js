import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import Home from "./src/screens/Home";
import Favorites from "./src/screens/Favorites";
import Search from "./src/screens/Search";
import Details from "./src/screens/Details";
import {Avatar} from "react-native-paper"
import { Provider } from 'react-redux'
import { Provider as ProviderNav } from 'react-native-paper';
import Store from "./src/store/Store";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
      <ProviderNav>
      <Provider store={Store}>
          <NavigationContainer>
              <Tab.Navigator  screenOptions={{ headerShown: false, tabBarShowLabel : false }}>
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
                          //tabBarBadge:,
                      }}
                      name="Favorites" component={Favorites}/>
                  <Tab.Screen
                      options={{
                          tabBarIcon: ({ color, size }) => (
                              <Avatar.Icon icon="search-web" size={35} style={{ backgroundColor:'transparent'}} color='red'/>
                          ),
                      }}
                      name="Search" component={Search}/>
                  <Tab.Screen
                      options={{
                          title: false,
                          headerShow: false,
                          headerShown: false
                      }}
                      name="Details" component={Details}/>
              </Tab.Navigator>
          </NavigationContainer>
      </Provider>
      </ProviderNav>
  );
}
