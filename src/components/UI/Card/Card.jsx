import * as React from 'react';
import {Text} from 'react-native-paper';
import {ImageBackground, Pressable,View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import {favoriteToggle} from '../../../store/favorite/FavoriteSlice'
import globalStyle from "../../../style/GlobalStyle";
import {MaterialIcons} from '@expo/vector-icons';
import {useEffect} from "react";


export default function CardComponent({dataCard, navigate}) {
    const dispatch = useDispatch()
    const favoritesAmount = useSelector(state => state.favorite.listFavorites)
    const image = {uri: dataCard.item.strDrinkThumb};
    const article = dataCard.item.strDrink;
    const category = dataCard.item.strCategory;
    const iconColor = globalStyle.color_light_grey.color
    let itemAdded = null

    useEffect(() => {
        const item = favoritesAmount.find((el) => el.idDrink === dataCard.item.idDrink)
        itemAdded = !!item
    }, [favoritesAmount]);

    return (
        <Pressable onPress={() => navigate(dataCard.item)}>
            <View
                style={[globalStyle.h_130, globalStyle.mt_1, globalStyle.mb_1, globalStyle.rm_contain, globalStyle.relative, globalStyle.z_0]}>
                <ImageBackground source={image} resizeMode="cover" style={[globalStyle.h_100p]}>
                    <View style={[globalStyle.h_100p, globalStyle.bg_color_black]}>
                        <View style={[globalStyle.jc_center, globalStyle.flex_1, globalStyle.ai_center]}>
                            <Text variant="headlineMedium" style={[globalStyle.color_light]}>{article}</Text>
                            <Text variant="bodyLarge" style={[globalStyle.color_light_grey]}>{category}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <Pressable onPress={(state) => dispatch(favoriteToggle(dataCard.item))}
                       style={[globalStyle.bg_tnt, globalStyle.ai_end, globalStyle.m_bot_minus, globalStyle.absolute, globalStyle.p_10, globalStyle.r_0]}>
                <MaterialIcons name="favorite" size={20} color={iconColor}/>
            </Pressable>
        </Pressable>

    )
}