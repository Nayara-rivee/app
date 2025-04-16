import React, { createContext, useContext, useRef } from "react";
import { Alert, Dimensions,Text, View,StyleSheet, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
export const AuthContextPainelCli:any= createContext({});
import {MaterialIcons, AntDesign}from 'react-native-vector-icons';
import { Input } from "../components/Input";


export const AuthProviderPainelCli = (props:any):any =>{
    const moldalizeRef = useRef<Modalize>(null);

    const onOpen = ()=>{
        moldalizeRef?.current?.open()
    }

    // conteudo do modal
    const _container = () =>{
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="close"
                            size={30}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Criar Novo Projeto</Text>
                    <TouchableOpacity>
                        <AntDesign
                            name="check"
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Input
                        title="Titulo:"
                        labelStyle={styles.label}
                    />
                    <Input
                        title="Plano:"
                        labelStyle={styles.label}
                    />
                    <Input
                        title="Descrição:"
                        labelStyle={styles.label}
                        height={100}
                        multiline
                        numberOfLines={5}
                    />
                </View>
            </View>
        )
    }
    
    return(
        <AuthContextPainelCli.Provider value={{onOpen}}>
            {props.children}
            <Modalize
                ref={moldalizeRef}
                childrenStyle={{height:Dimensions.get('window').height/1.3}}
                adjustToContentHeight={true}
            >
                {_container()}
            </Modalize>

        </AuthContextPainelCli.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContextPainelCli);
export const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    header:{
        width:'100%',
        height:40,
        paddingHorizontal:40,
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    content:{
        width:'100%',
        paddingHorizontal:20
    },
    label:{
        fontWeight:'bold',
        color:'#000'
    }
})