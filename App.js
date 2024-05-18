import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import Home from "./src/screens/Home";
import Favorites from "./src/screens/Favorites";
import Search from "./src/screens/Search";
import Details from "./src/screens/Details";
import {Avatar} from "react-native-paper"
import {Provider} from 'react-redux'
import {Provider as ProviderNav} from 'react-native-paper';
import Store from "./src/store/Store";
import {useSelector} from "react-redux";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Tab = createMaterialBottomTabNavigator()
const Stack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    );
}

function FavoritesStackScreen() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Favorites" component={Favorites}/>
        </Stack.Navigator>
    );
}

function SearchStackScreen() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Search" component={Search}/>
        </Stack.Navigator>
    );
}

function AppContent() {
    const favoritesAmount = useSelector(state => state.favorite.listFavorites.length);
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
                <Tab.Screen
                    name="Cocktails"
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Avatar.Icon icon="glass-cocktail" size={35} style={{backgroundColor: 'transparent'}}
                                         color='red'/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesStackScreen}
                    options={{
                        tabBarBadge: favoritesAmount > 0 ? favoritesAmount : null,
                        tabBarIcon: ({color, size}) => (
                            <Avatar.Icon icon="star" size={35} style={{backgroundColor: 'transparent'}} color='red'/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchStackScreen}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Avatar.Icon icon="search-web" size={35} style={{backgroundColor: 'transparent'}}
                                         color='red'/>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default function App() {
    return (
        <ProviderNav>
            <Provider store={Store}>
                <AppContent/>
            </Provider>
        </ProviderNav>
    )
}