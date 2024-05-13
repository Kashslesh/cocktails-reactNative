import {View, StyleSheet,FlatList} from "react-native";
import {useEffect} from "react";
import Spinner from "../components/UI/Spinner/Spinner";
import CardComponent from "../components/UI/Card/Card";
import Error from '../components/UI/Error/Error';
import {useDispatch,useSelector} from "react-redux";
import {allCocktails} from "../store/cocktails/CocktailsSlicer";
import {nextLetter} from "../store/cocktails/CocktailsSlicer";
export default function Home({ navigation }) {
    const dispatch = useDispatch()
    const cocktails = useSelector(state => state.cocktails.list)
    const error = useSelector(state => state.cocktails.error)
    const currentLetter = useSelector(state => state.cocktails.currentLetter)

    const linkToDetails = function (id){
        navigation.navigate('Details', {id})
    }

    useEffect(()=>{
        dispatch(allCocktails())
    },[currentLetter])
    const nextPage = ()=>{
        dispatch(nextLetter())
    }

    return (
        <View style={styles.home}>
            { error ? <Error/> :
                <FlatList
                data={cocktails}
                renderItem={(item)=><CardComponent navigate={linkToDetails} dataCard={item}/>}
                onEndReachedThreshold={0.5}
                onEndReached={nextPage}
                ListFooterComponent={()=><Spinner/>}
            />}
        </View>
    );
}
const styles = StyleSheet.create({
    home:{
        flex:1,
        justifyContent:'center',
        padding:5
    }
})