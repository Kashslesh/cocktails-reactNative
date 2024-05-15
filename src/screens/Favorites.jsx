import {View} from "react-native";
import {Text} from "react-native-paper"
import {useSelector} from "react-redux";
import FavoritesList from "../components/UI/FavoritesList/FavoritesList";
export default function Details() {
    const listFavorites = useSelector(state=>state.favorite.listFavorites)
    return (
        <View style={{flex: 3,justifyContent: 'centre' }}>
            {listFavorites.length > 0 ? <FavoritesList favorites={listFavorites}/> : <Text
                style={{ marginLeft: 'auto', marginRight: 'auto'}} variant="displaySmall">Favorites is empty</Text>}
        </View>
    );
}