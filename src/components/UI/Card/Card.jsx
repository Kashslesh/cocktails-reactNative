import * as React from 'react';
import {Button, Card} from 'react-native-paper';
import {Pressable, View, Image} from "react-native";
import {useDispatch } from 'react-redux'
import {addFavorite} from '../../../store/favorite/FavoriteSlice'
import globalStyle from "../../../style/GlobalStyle";

export default function CardComponent({dataCard, navigate}) {
    const dispatch = useDispatch()
        //<Button onPress={(state)=>dispatch(addFavorite(dataCard.item))}>Favorites</Button>
        //<Card.Title title={dataCard.item.strDrink} subtitle={dataCard.item.strCategory}/>
    //<Card.Cover style={{borderRadius: 0}} source={{uri: dataCard.item.strDrinkThumb}}/>

    return (
        <Pressable onPress={() => navigate(dataCard.item)}>
            <View style={[globalStyle.h_130, globalStyle.mt_1, globalStyle.mb_1, globalStyle.rm_contain]}>
                <Image style={[globalStyle.h_100p,]} source={{uri: dataCard.item.strDrinkThumb}}/>
            </View>
        </Pressable>
    )
}