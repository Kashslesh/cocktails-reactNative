import {ScrollView, View} from "react-native";
import globalStyle from "../../../style/GlobalStyle";
import {Chip} from "react-native-paper";
import {category} from "../../../service/tools/tools";
import {useState} from "react";

export default function Category (){
    const [isHidden, setIsHidden] = useState(true);
    return(
        <ScrollView>
            <View style={[globalStyle.fd_row, globalStyle.fw_wrap, globalStyle.ai_center, globalStyle.jc_center]}>
                {category.map((el, index)=>{
                    if (index > 3 && isHidden){
                        return
                    }
                    return <Chip style={[globalStyle.m_5]} onPress={()=>console.log(el.key)} key={el.key}>{el.strCategory}</Chip>
                })}
                {isHidden ? <Chip style={[globalStyle.m_5]} onPress={()=>setIsHidden(false)}>...</Chip> : null}
            </View>
        </ScrollView>
    )
}