import {View} from "react-native";
import {Text} from "react-native-paper"
import {useSelector} from "react-redux";
import FavoritesList from "../components/UI/FavoritesList/FavoritesList";
import globalStyle from "../style/GlobalStyle";
export default function Favorites({ navigation }) {
    const listFavorites = useSelector(state=>state.favorite.listFavorites)
    return (
        <View style={{flex: 3,justifyContent: 'centre' }}>
            {listFavorites.length > 0 ? <FavoritesList favorites={listFavorites} navigation={navigation}/> :
                <View style={[globalStyle.ai_center, globalStyle.jc_center, globalStyle.flex_2]} >
                    <Text variant="displaySmall">Empty</Text>
                </View>}
        </View>
    );
}