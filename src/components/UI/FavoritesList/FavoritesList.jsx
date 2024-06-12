import * as React from 'react';
import {List,Button} from 'react-native-paper';
import {useDispatch} from "react-redux";
import {deleteFavorite} from "../../../store/favorite/FavoriteSlice";
import { Entypo } from '@expo/vector-icons';
import globalStyle from "../../../style/GlobalStyle";
const favoritesList = ({favorites, navigation}) => {
    const navigationToDetails=(cocktail)=>{
       navigation.navigate('DetailsFavorites', {cocktail})
    }
    const dispatch = useDispatch()
    return (
        <List.AccordionGroup>
            {favorites.map(drink => {
                return (
                    <List.Accordion style={{width:'100%'}} title={drink.strDrink} id={drink.idDrink} key={drink.idDrink}>
                        <List.Item style={[globalStyle.p_r_0]} title={drink.strCategory + ' | ' + drink.strAlcoholic} description={drink.strInstructions}
                                   onPress={()=>{navigationToDetails(drink)}}
                                   right={()=>(
                                   <Button onPress={()=>{dispatch(deleteFavorite(drink.idDrink))}}>
                                       <Entypo name="cross" size={24} color="black" />
                                   </Button>)
                        }/>
                    </List.Accordion>)})}
        </List.AccordionGroup>
    )
}
export default favoritesList