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
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator()
const Stack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={Home}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    );
}

function FavoritesStackScreen() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FavoritesScreen" component={Favorites}/>
            <Stack.Screen name="DetailsFavorites" component={Details}/>
        </Stack.Navigator>
    );
}

function SearchStackScreen() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SearchScreen" component={Search}/>
            <Stack.Screen name="DetailsSearch" component={Details}/>
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
                            <Fontisto name="cocktail" size={20} color="red" />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesStackScreen}
                    options={{
                        tabBarBadge: favoritesAmount > 0 ? favoritesAmount : null,
                        tabBarIcon: ({color, size}) => (
                            <MaterialIcons name={favoritesAmount > 0 ? "favorite" :"favorite-outline"} size={20} color="red" />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchStackScreen}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <AntDesign name="search1" size={20} color="red" />
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