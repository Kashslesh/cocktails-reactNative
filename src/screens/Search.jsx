import {FlatList, View} from "react-native";
import {useState, useEffect} from "react";
import { Searchbar,Text } from 'react-native-paper';
import {searchCocktails,clearCocktail} from "../store/cocktails/SearchCocktailsSlice";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../components/UI/Spinner/Spinner";
import Card from "../components/UI/Card/Card";
import Error from '../components/UI/Error/Error';


export default function Details({ navigation }){
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch()
    const cocktails = useSelector(state => state.searchCocktails.cocktails)
    const isNotExist = useSelector(state => state.searchCocktails.isNotExist)
    const error = useSelector(state => state.searchCocktails.error)
    const loading = useSelector(state => state.searchCocktails.loading)

    const linkToDetails = function (cocktail){
        navigation.navigate('DetailsSearch', {cocktail})
    }
    const goBack = ()=>{navigation.goBack()}

    useEffect(()=>{
        if (searchQuery.length < 3){return}
        dispatch(searchCocktails(searchQuery))
    },[searchQuery])
    return (
        <>
            <View style={{ flex: 0.5, justifyContent: 'start', paddingTop: 20 }}>
                <Text style={{textAlign:'center'}} variant="titleMedium">Find out your cocktail</Text>
               <View style={{ paddingRight: 5, paddingLeft: 5 }}>
                   <Searchbar
                       placeholder="Search"
                       aria-label="label"
                       mode="view"
                       enterKeyHint="search"
                       onChangeText={setSearchQuery}
                       value={searchQuery}
                       onClearIconPress={()=>dispatch(clearCocktail())}
                   />
               </View>
            </View>
            <View style={{ flex: 2 }}>
                {
                    loading ? <Spinner/> : (error || isNotExist ? <Error/> :
                        <FlatList
                        data={cocktails}
                        renderItem={(item)=><Card navigate={linkToDetails} dataCard={item}/>}
                    />)
                }
            </View>
        </>
    );
}