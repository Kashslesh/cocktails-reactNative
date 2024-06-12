import {ScrollView, View} from "react-native";
import globalStyle from "../../../style/GlobalStyle";
import {Chip} from "react-native-paper";
import {category} from "../../../service/tools/tools";
import {useState} from "react";
import {COCKTAILS_SEARCH_BY_CATEGORY} from "../../../service/tools/request_type";
import {useDispatch} from "react-redux";
import {searchCocktails} from "../../../store/cocktails/SearchCocktailsSlice"
export default function Category (){
    const [isHidden, setIsHidden] = useState(true);
    const dispatch = useDispatch()
    const fetchByCategory=(category)=>{
        dispatch(searchCocktails({type:COCKTAILS_SEARCH_BY_CATEGORY,category}))
    }
    return(
        <ScrollView>
            <View style={[globalStyle.fd_row, globalStyle.fw_wrap, globalStyle.ai_center, globalStyle.jc_center]}>
                {category.map((el, index)=>{
                    if (index > 3 && isHidden){
                        return
                    }
                    return <Chip style={[globalStyle.m_5]} onPress={()=>fetchByCategory(el.key)} key={el.key}>{el.strCategory}</Chip>
                })}
                {isHidden ? <Chip style={[globalStyle.m_5]} onPress={()=>setIsHidden(false)}>...</Chip> : null}
            </View>
        </ScrollView>
    )
}