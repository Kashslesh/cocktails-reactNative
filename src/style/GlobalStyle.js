// low-level global StyleSheet
import { StyleSheet } from "react-native";

export default gstyles = StyleSheet.create({
    // descriptions: style function that takes originalWidth, originalHeight as parameters and return
    // aspectRatio of originalWidth / originalHeight
    // params: originalWidth, originalHeight
    // returns: aspectRatio of originalWidth / originalHeight
    aspect_ratio: (originalWidth, originalHeight) => ({
        aspectRatio: originalWidth / originalHeight,
    }),
    ai_center: {
        alignItems: "center",
    },
    ai_start: {
        alignItems: "flex-start",
    },
    ai_end: {
        alignItems: "flex-end",
    },
    absolute: {
        position: "absolute",
    },
    relative: {
        position: "relative",
    },
    bg_white: {
        backgroundColor: "#fff",
    },
    bg_light: {
        backgroundColor: "#f8f9fa",
    },
    bg_black: {
        backgroundColor: "#000",
    },
    br_3: {
        borderRadius: 3,
    },
    br_5: {
        borderRadius: 5,
    },
    br_6: {
        borderRadius: 6,
    },
    br_8: {
        borderRadius: 8,
    },
    br_10: {
        borderRadius: 10,
    },
    br_12: {
        borderRadius: 12,
    },
    br_14: {
        borderRadius: 14,
    },
    br_15: {
        borderRadius: 15,
    },
    br_18: {
        borderRadius: 18,
    },
    br_20: {
        borderRadius: 20,
    },
    br_25: {
        borderRadius: 25,
    },
    br_30: {
        borderRadius: 30,
    },
    br_40: {
        borderRadius: 40,
    },
    br_50: {
        borderRadius: 50,
    },
    bw_1: {
        borderWidth: 1,
    },
    bw_2: {
        borderWidth: 2,
    },
    bw_3: {
        borderWidth: 3,
    },
    bbw_1: {
        borderBottomWidth: 1,
    },
    bbw_2: {
        borderBottomWidth: 2,
    },
    bbw_3: {
        borderBottomWidth: 3,
    },
    btw_1: {
        borderTopWidth: 1,
    },
    btw_2: {
        borderTopWidth: 2,
    },
    btw_3: {
        borderTopWidth: 3,
    },
    flex_1: {
        flex: 1,
    },
    flexShrink_1: {
        flexShrink: 1,
    },
    fd_row: {
        flexDirection: "row",
    },
    fd_row_reverse: {
        flexDirection: "row-reverse",
    },
    fd_col_reverse: {
        flexDirection: "column-reverse",
    },
    fw_200: {
        fontWeight: "200",
    },
    fw_300: {
        fontWeight: "300",
    },
    fw_400: {
        fontWeight: "400",
    },
    fw_500: {
        fontWeight: "500",
    },
    fw_600: {
        fontWeight: "600",
    },
    fw_700: {
        fontWeight: "700",
    },
    fw_900: {
        fontWeight: "900",
    },
    fw_wrap: {
        flexWrap: "wrap",
    },
    fs_12: {
        fontSize: 12,
    },
    fs_13: {
        fontSize: 13,
    },
    fs_14: {
        fontSize: 14,
    },
    fs_15: {
        fontSize: 15,
    },
    fs_16: {
        fontSize: 16,
    },
    fs_18: {
        fontSize: 18,
    },
    fs_20: {
        fontSize: 20,
    },
    fs_22: {
        fontSize: 22,
    },
    fs_24: {
        fontSize: 24,
    },
    fs_25: {
        fontSize: 25,
    },
    fs_26: {
        fontSize: 26,
    },
    fs_28: {
        fontSize: 28,
    },
    fs_30: {
        fontSize: 30,
    },
    fs_32: {
        fontSize: 32,
    },
    fs_33: {
        fontSize: 33,
    },
    fs_34: {
        fontSize: 34,
    },
    fs_35: {
        fontSize: 35,
    },
    fs_36: {
        fontSize: 36,
    },
    fs_38: {
        fontSize: 38,
    },
    fs_40: {
        fontSize: 40,
    },
    fs_42: {
        fontSize: 42,
    },
    fs_44: {
        fontSize: 44,
    },
    fs_45: {
        fontSize: 45,
    },
    h_20: {
        height: 20,
    },
    h_35: {
        height: 35,
    },
    h_40: {
        height: 40,
    },
    h_50: {
        height: 50,
    },
    h_80: {
        height: 80,
    },
    h_100: {
        height: 100,
    },
    h_130: {
        height: 130,
    },
    h_150: {
        height: 150,
    },
    h_7p: {
        height: "7%",
    },
    h_10p: {
        height: "10%",
    },
    h_20p: {
        height: "20%",
    },
    h_30p: {
        height: "30%",
    },
    h_40p: {
        height: "40%",
    },
    h_45p: {
        height: "45%",
    },
    h_50p: {
        height: "50%",
    },
    h_55p: {
        height: "55%",
    },
    h_60p: {
        height: "60%",
    },
    h_65p: {
        height: "65%",
    },
    h_70p: {
        height: "70%",
    },
    h_75p: {
        height: "75%",
    },
    h_80p: {
        height: "80%",
    },
    h_83p: {
        height: "83%",
    },
    h_85p: {
        height: "85%",
    },
    h_90p: {
        height: "90%",
    },
    h_95p: {
        height: "95%",
    },
    h_100p: {
        height: "100%",
    },
    icon_white: {
        tintColor: "#fff",
    },
    icon_red: {
        tintColor: "red",
    },
    icon_tomato: {
        tintColor: "tomato",
    },
    icon_black: {
        tintColor: "#000",
    },
    jc_start: {
        justifyContent: "flex-start",
    },
    jc_center: {
        justifyContent: "center",
    },
    jc_sa: {
        justifyContent: "space-around",
    },
    jc_sb: {
        justifyContent: "space-between",
    },
    jc_se: {
        justifyContent: "space-evenly",
    },
    leading_3: {
        lineHeight: 12,
    },
    leading_4: {
        lineHeight: 16,
    },
    leading_5: {
        lineHeight: 20,
    },
    ls_2: {
        letterSpacing: 2,
    },
    ls_3: {
        letterSpacing: 3,
    },
    ls_4: {
        letterSpacing: 4,
    },
    ls_5: {
        letterSpacing: 5,
    },
    mh_3p: {
        marginHorizontal: "3%",
    },
    mh_5p: {
        marginHorizontal: "5%",
    },
    mh_5: {
        marginHorizontal: 5,
    },
    mh_8: {
        marginHorizontal: 8,
    },
    mh_10: {
        marginHorizontal: 10,
    },
    mh_15: {
        marginHorizontal: 15,
    },
    mh_20: {
        marginHorizontal: 20,
    },
    m_5: {
        margin: 5,
    },
    m_8: {
        margin: 8,
    },
    m_10: {
        margin: 10,
    },
    m_12: {
        margin: 12,
    },
    m_14: {
        margin: 14,
    },
    m_15: {
        margin: 15,
    },
    m_20: {
        margin: 20,
    },
    m_30: {
        margin: 30,
    },
    m_50: {
        margin: 50,
    },
    mr_3: {
        marginRight: 3,
    },
    mr_5: {
        marginRight: 5,
    },
    mr_7: {
        marginRight: 7,
    },
    mr_8: {
        marginRight: 8,
    },
    mr_10: {
        marginRight: 10,
    },
    mr_15: {
        marginRight: 15,
    },
    mr_20: {
        marginRight: 20,
    },
    mt_1: {
        marginTop: 1,
    },
    mt_2: {
        marginTop: 2,
    },
    mt_5: {
        marginTop: 5,
    },
    mt_8: {
        marginTop: 8,
    },
    mt_10: {
        marginTop: 10,
    },
    mt_13: {
        marginTop: 13,
    },
    mt_15: {
        marginTop: 15,
    },
    mt_20: {
        marginTop: 20,
    },
    mt_22: {
        marginTop: 22,
    },
    mt_25: {
        marginTop: 25,
    },
    mt_28: {
        marginTop: 28,
    },
    mt_30: {
        marginTop: 30,
    },
    mt_50: {
        marginTop: 50,
    },
    mb_1: {
        marginBottom: 1,
    },
    mb_5: {
        marginBottom: 5,
    },
    mb_2: {
        marginBottom: 2,
    },
    mb_8: {
        marginBottom: 8,
    },
    mb_10: {
        marginBottom: 10,
    },
    mb_12: {
        marginBottom: 12,
    },
    mb_15: {
        marginBottom: 15,
    },
    mb_17: {
        marginBottom: 17,
    },
    mb_18: {
        marginBottom: 18,
    },
    mb_20: {
        marginBottom: 20,
    },
    mb_25: {
        marginBottom: 25,
    },
    mb_30: {
        marginBottom: 30,
    },
    mb_40: {
        marginBottom: 40,
    },
    mb_50: {
        marginBottom: 50,
    },
    ml_5: {
        marginLeft: 5,
    },
    ml_8: {
        marginLeft: 8,
    },
    ml_10: {
        marginLeft: 10,
    },
    ml_15: {
        marginLeft: 15,
    },
    ml_20: {
        marginLeft: 20,
    },
    p_5: {
        padding: 5,
    },
    p_8: {
        padding: 8,
    },
    p_10: {
        padding: 10,
    },
    p_15: {
        padding: 15,
    },
    pt_5: {
        paddingTop: 5,
    },
    pt_15: {
        paddingTop: 15,
    },
    pb_5: {
        paddingBottom: 5,
    },
    pb_8: {
        paddingBottom: 8,
    },
    pb_10: {
        paddingBottom: 10,
    },
    pb_13: {
        paddingBottom: 13,
    },
    pb_15: {
        paddingBottom: 15,
    },
    pb_18: {
        paddingBottom: 18,
    },
    pb_20: {
        paddingBottom: 20,
    },
    pb_25: {
        paddingBottom: 25,
    },
    pb_30: {
        paddingBottom: 30,
    },
    pb_35: {
        paddingBottom: 25,
    },
    pl_5: {
        paddingLeft: 5,
    },
    pl_8: {
        paddingLeft: 8,
    },
    pl_10: {
        paddingLeft: 10,
    },
    pl_15: {
        paddingLeft: 15,
    },
    pl_20: {
        paddingLeft: 20,
    },
    text_center: {
        textAlign: "center",
    },
    text_underline: { textDecorationLine: "underline" },
    text_italic: { fontStyle: "italic" },
    text_red: {
        color: "#ff0000",
    },
    text_white: {
        color: "#fff",
    },
    text_black: {
        color: "#000",
    },
    text_black_900: {
        color: "#191919",
    },
    text_black_800: {
        color: "#1d1d1f",
    },
    text_black_700: {
        color: "#333",
    },
    text_black_600: {
        color: "#424245",
    },
    text_black_500: {
        color: "#505050",
    },
    text_black_400: {
        color: "#767676",
    },
    text_gray: {
        color: "#999",
    },
    text_gray_200: {
        color: "#626273",
    },
    text_gray_100: {
        color: "#ccc",
    },
    text_tomato: {
        color: "tomato",
    },
    w_20: {
        width: 20,
    },
    w_25: {
        width: 25,
    },
    w_30: {
        width: 30,
    },
    w_35: {
        width: 35,
    },
    w_40: {
        width: 40,
    },
    w_100: {
        width: 100,
    },
    w_7p: {
        width: "7%",
    },
    w_10p: {
        width: "10%",
    },
    w_20p: {
        width: "20%",
    },
    w_30p: {
        width: "30%",
    },
    w_33p: {
        width: "33%",
    },
    w_35p: {
        width: "35%",
    },
    w_40p: {
        width: "40%",
    },
    w_45p: {
        width: "45%",
    },
    w_50p: {
        width: "50%",
    },
    w_55p: {
        width: "55%",
    },
    w_60p: {
        width: "60%",
    },
    w_65p: {
        width: "65%",
    },
    w_70p: {
        width: "70%",
    },
    w_80p: {
        width: "80%",
    },
    w_83p: {
        width: "83%",
    },
    w_85p: {
        width: "85%",
    },
    w_90p: {
        width: "90%",
    },
    w_95p: {
        width: "95%",
    },
    w_100p: {
        width: "100%",
    },
    rm_contain: {
        resizeMode: 'center'
    },
    tint_img:{
        tintColor: 'rgba(0,0,0,0.02)',
    },
    z_100:{
        zIndex:100
    },
    z_900:{
        zIndex:900
    },
    gs_70:{
        filter: 'grayscale(50%)'
    }
});