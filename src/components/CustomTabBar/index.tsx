import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from "./styles";
import {AntDesign, FontAwesome,Entypo,MaterialIcons} from 'react-native-vector-icons';
import { themas } from "../../global/themes";
import { AuthContextPainelCli } from "../../context/authContext_painelCli";

export default({state,navigation})=>{

    const {onOpen} = useContext<any>(AuthContextPainelCli)

    const go = (ScreenName:string)=>{
        navigation.navigate(ScreenName)
    }

    return(
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>go("PainelCli")}>
                <AntDesign
                    name="bars"
                    style={{opacity:state.index === 0?1:0.3,color:themas.colors.primary, fontSize:32}}
                />          
            </TouchableOpacity>
            <TouchableOpacity style={style.TabItemButton} onPress={()=>onOpen()}>
                <View style={{width:'100%',left:10,top:4}}>
                    <Entypo
                        name="plus"
                        size={40}
                        color={"#FFF"}
                    />
                </View>
                <View style={{flexDirection:'row-reverse', width:'100%', right:10, bottom:10}}>
                    <MaterialIcons
                        name="edit"
                        color={"#FFF"}
                        size={30}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={()=>go("Usuario")}>
            <FontAwesome
                    name="user"
                    style={{opacity:state.index === 1?1:0.3,color:themas.colors.primary, fontSize:32}}
                />          
            </TouchableOpacity>
        </View>
    )
}