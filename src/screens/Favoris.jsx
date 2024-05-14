import {View} from "react-native";
import {Text} from "react-native-paper"
import {useEffect} from "react";
import {useSelector} from "react-redux";

export default function Details() {
    return (
        <View style={{flex: 3, marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center'}}>
            <Text variant="displaySmall">Favorites is empty</Text>
        </View>
    );
}