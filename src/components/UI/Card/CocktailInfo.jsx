import {Text} from "react-native-paper";
import {View, Image, Pressable, FlatList, ScrollView} from 'react-native';
import globalStyle from "../../../style/GlobalStyle";
import {MaterialIcons} from "@expo/vector-icons";
import {favoriteToggle} from '../../../store/favorite/FavoriteSlice'
import {useDispatch} from "react-redux";
import { Button } from 'react-native-paper';


export default function cocktailInfo({infoCocktail, goBack}) {
    const dispatch = useDispatch()
    const newRecipe = [];
    const newMeasure = [];
    const strIngredient = /strIngredient/
    const strMeasure = /strMeasure/
    const iconColor = globalStyle.color_light_grey.color
    Object.entries(infoCocktail).forEach(
        ([key, value]) => {
            if (key.match(strIngredient) && value) {
                newRecipe.push(value);
            }
            if (key.match(strMeasure) && value) {
                newMeasure.push(value);
            }
        }
    );
    return (
        <View style={{flex: 3}}>
            <View style={[globalStyle.z_0]}>
                <Image style={[globalStyle.min_h_300, globalStyle.min_w_300]}
                       source={{uri: infoCocktail.strDrinkThumb}}/>
                <Pressable onPress={() => dispatch(favoriteToggle(infoCocktail))}
                           style={[globalStyle.bg_tnt, globalStyle.ai_end, globalStyle.m_bot_minus, globalStyle.absolute,
                               globalStyle.p_10, globalStyle.r_0]}>
                    <MaterialIcons name="favorite" size={20} color={iconColor}/>
                </Pressable>
            </View>
            <ScrollView
                style={[globalStyle.z_1, globalStyle.m_top_minus, globalStyle.br_25_top, globalStyle.bg_light,
                    globalStyle.py_10, globalStyle.px_20, globalStyle.flex_2]}>
                <Text variant="displayMedium">{infoCocktail.strDrink}</Text>
                <Text variant="headlineSmall">{infoCocktail.strCategory}</Text>
                <Text style={globalStyle.py_10} svariant="bodyLarge">{infoCocktail.strInstructions}</Text>
                <View style={[globalStyle.jc_center, globalStyle.fd_row, globalStyle.py_10, globalStyle.ai_center]}>
                    <FlatList
                        data={newRecipe}
                        scrollEnabled={false}
                        renderItem={({item}) =>
                            <Text variant="bodyMedium">{item}</Text>
                        }
                    />
                    <FlatList
                        data={newMeasure}
                        scrollEnabled={false}
                        renderItem={({item}) =>
                            <Text variant="bodyMedium">{item}</Text>
                        }
                    />
                </View>
                <Button mode="contained" onPress={goBack}>
                    <Text style={globalStyle.color_light_grey}  variant="titleMedium">Back</Text>
                </Button>
            </ScrollView>
        </View>
    )
}