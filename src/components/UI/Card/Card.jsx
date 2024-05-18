import * as React from 'react';
import {Button, Card} from 'react-native-paper';
import {Pressable} from "react-native";
import {useDispatch } from 'react-redux'
import {addFavorite} from '../../../store/favorite/FavoriteSlice'

export default function CardComponent({dataCard, navigate}) {
    const dispatch = useDispatch()
    return (
        <Pressable onPress={() => navigate(dataCard.item)}>
            <Card style={{marginTop: 20, marginBottom: 20}} mode="elevated">
                <Card.Title title={dataCard.item.strDrink} subtitle={dataCard.item.strCategory}/>
                <Card.Cover style={{borderRadius: 0}} source={{uri: dataCard.item.strDrinkThumb}}/>
                <Card className="Action">
                    <Button onPress={(state)=>dispatch(addFavorite(dataCard.item))}>Favorites</Button>
                </Card>
            </Card>
        </Pressable>
    )
}