import * as React from 'react';
import {List,Button} from 'react-native-paper';
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
                                   right={()=>(<Button onPress={()=>{dispatch(deleteFavorite(drink.idDrink))}}>
                                       <List.Icon icon="delete" color="red"/>
                                   </Button>)
                        }/>
                    </List.Accordion>)})}
        </List.AccordionGroup>
    )
}
export default favoritesList