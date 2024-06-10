import * as React from 'react';
import {Button, Card, Text} from 'react-native-paper';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import {addFavorite,deleteFavorite} from '../../../store/favorite/FavoriteSlice'
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
    let itemAdded  = null
    let test = false
    let test2 = null

    useEffect(() => {
         const item = favoritesAmount.find((el)=>  el.idDrink === dataCard.item.idDrink)
        itemAdded  = !!item
    }, [favoritesAmount]);
    const Icon = ()=>{
        return(
            <MaterialIcons name={test2} size={20} color={iconColor} />
        )
    }
    function favoriteToggle(){
        if(itemAdded){
            dispatch(deleteFavorite(dataCard.item.idDrink))
            test2 = "favorite-outline"
        }else {
            dispatch(addFavorite(dataCard.item))
            test = "favorite"
            console.log(test)

        }
    }
    return (
        <Pressable onPress={() => navigate(dataCard.item)}>
            <View
                style={[globalStyle.h_130, globalStyle.mt_1, globalStyle.mb_1, globalStyle.rm_contain, globalStyle.relative, globalStyle.z_0]}>
                <ImageBackground source={image} resizeMode="cover" style={[globalStyle.h_100p]}>
                    <View style={[globalStyle.h_100p, globalStyle.bg_color_black]}>
                        <View style={[globalStyle.jc_center, globalStyle.flex_1, globalStyle.ai_center]}>
                            <Text variant="displayMedium" style={[globalStyle.color_light]}>{article}</Text>
                            <Text variant="bodyLarge" style={[globalStyle.color_light_grey]}>{category}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <Pressable onPress={(state)=>favoriteToggle()}
                       style={[globalStyle.bg_tnt, globalStyle.ai_end, globalStyle.m_top,globalStyle.absolute, globalStyle.p_10, globalStyle.r_0]}>
                {Icon}
            </Pressable>
        </Pressable>

    )
}