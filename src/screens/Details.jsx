import {View} from "react-native";
import CocktailInfo from '../components/UI/Card/CocktailInfo'
import Error from '../components/UI/Error/Error'
export default function Details({ route, navigation }){
    let cocktail = route.params.cocktail
    const goBack = ()=>{navigation.goBack()}
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {cocktail ?
                <CocktailInfo infoCocktail={cocktail} goBack={goBack}/>
                : <Error/>}
        </View>
    );
}