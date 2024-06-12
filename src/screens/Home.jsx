import {View,FlatList} from "react-native";
import {useEffect} from "react";
import Spinner from "../components/UI/Spinner/Spinner";
import Card from "../components/UI/Card/Card";
import Error from '../components/UI/Error/Error';
import {useDispatch,useSelector} from "react-redux";
import {allCocktails} from "../store/cocktails/CocktailsSlice";
import {nextLetter} from "../store/cocktails/CocktailsSlice";
import Fin from "../components/UI/Fin/Fin";
import globalStyle from "../style/GlobalStyle";
export default function Home({ navigation }) {
    const dispatch = useDispatch()
    const cocktails = useSelector(state => state.cocktails.list)
    const error = useSelector(state => state.cocktails.error)
    const currentLetter = useSelector(state => state.cocktails.currentLetter)
    const endOfList = useSelector(state => state.cocktails.endOfList)

    const linkToDetails = function (cocktail){
        navigation.navigate('Details', {cocktail})
    }

    useEffect(()=>{
        dispatch(allCocktails())
    },[currentLetter])
    const nextPage = ()=>{
        dispatch(nextLetter())
    }
    return (
        <View style={[globalStyle.flex_1, globalStyle.jc_center]}>
            { error ? <Error/> :
                <FlatList
                data={cocktails}
                renderItem={(item)=><Card navigate={linkToDetails} dataCard={item}/>}
                onEndReached={nextPage}
                ListFooterComponent={()=>endOfList ? <Fin/> : <Spinner/>}
            />}
        </View>
    );
}
