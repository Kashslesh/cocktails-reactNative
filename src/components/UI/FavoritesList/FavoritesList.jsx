import * as React from 'react';
import {List} from 'react-native-paper';
import {useDispatch} from "react-redux";
import {deleteFavorite} from "../../../store/favorite/FavoriteSlice";
const favoritesList = ({favorites}) => {
    const dispatch = useDispatch()
    return (
        <List.AccordionGroup>
            {favorites.map(drink => {
                return (
                    <List.Accordion style={{width:'100%'}} title={drink.strDrink} id={drink.idDrink} key={drink.idDrink}>
                        <List.Item title={drink.strCategory + ' | ' + drink.strAlcoholic} description={drink.strInstructions}
                                   right={()=><List.Icon onPress={()=>{dispatch(deleteFavorite(drink.idDrink))}} icon="delete" color="red"/>
                        }/>
                    </List.Accordion>)})}
        </List.AccordionGroup>
    )
}
export default favoritesList