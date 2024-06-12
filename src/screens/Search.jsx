import {FlatList, View} from "react-native";
import {useState, useEffect} from "react";
import {Searchbar, Text} from 'react-native-paper';
import {searchCocktails, clearCocktail} from "../store/cocktails/SearchCocktailsSlice";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../components/UI/Spinner/Spinner";
import Card from "../components/UI/Card/Card";
import Error from '../components/UI/Error/Error';
import globalStyle from "../style/GlobalStyle";
import Category from "../components/UI/Category/Category";


export default function Details({navigation}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isHidden, setIsHidden] = useState(false);
    const dispatch = useDispatch()
    const cocktails = useSelector(state => state.searchCocktails.cocktails)
    const isNotExist = useSelector(state => state.searchCocktails.isNotExist)
    const error = useSelector(state => state.searchCocktails.error)
    const loading = useSelector(state => state.searchCocktails.loading)

    const linkToDetails = function (cocktail) {
        navigation.navigate('DetailsSearch', {cocktail})
    }
    const goBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        if (searchQuery.length < 3) {
            return
        }
        if (searchQuery.length > 1) {
            setIsHidden(true)
        }
        dispatch(searchCocktails(searchQuery))
    }, [searchQuery])
    return (
        <>
            {!isHidden ? <View style={[globalStyle.py_20,]}>
                <Text style={[globalStyle.text_center]} variant="titleMedium">Find out your cocktail by category</Text>
                <Category/>
            </View> : null
            }
            <View style={[globalStyle.pt_15]}>
                <Text style={[globalStyle.text_center]} variant="titleMedium">Find out your cocktail</Text>
                <View style={[globalStyle.px_5]}>
                    <Searchbar
                        placeholder="Search"
                        aria-label="Search"
                        mode="view"
                        enterKeyHint="search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        onClearIconPress={() => {
                            dispatch(clearCocktail())
                            setIsHidden(false)
                        }}
                    />
                </View>
            </View>
            <View style={{flex: 2}}>
                {
                    loading ? <Spinner/> : (error || isNotExist ? <Error/> :
                        <FlatList
                            data={cocktails}
                            renderItem={(item) => <Card navigate={linkToDetails} dataCard={item}/>}
                        />)
                }
            </View>
        </>
    );
}