import React, { useState } from "react";

import { Image, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import {MaterialIcons, Octicons}from 'react-native-vector-icons';

import { style } from "./styles";
import Logo from '../../assets/logoteste.png'
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation,NavigationProp } from '@react-navigation/native'


export default function Login (){

     const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail] = useState('a');
    const [password,setPassword] = useState('a');
    const [showPassword,setShowPassword] = useState(true);
    const [loading,setLoading] = useState(false)


    async function getLogin(){

        console.log('[getLogin] Loading ativado');

        try {

            setLoading(true)
            
            if(!email || !password){
                return Alert.alert('Atenção','Informe os campos obrigatórios!')
            }

            navigation.reset({routes:[{name:"BottomRoutes"}]})

            console.log('LOGOU!')

        } catch (error) {         
            console.log(error)
        }finally{
            setLoading(false)
        }
    }



    return(
            <View style={style.container}>
            <View style={style.boxTop}>
                <Image style={style.logo}
                    source={Logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input 
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"                
                    IconRight={MaterialIcons}
                    iconRightName="email"
                />
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRight={Octicons}
                    iconRightName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={()=>setShowPassword(!showPassword)}
                />

                {/* <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View  style={style.BoxInput}>
                    <TextInput style={style.input} value={email} onChangeText={setEmail}/>
                    <MaterialIcons name='email' size={20} color={themas.colors.gray}/>
                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <View  style={style.BoxInput}>
                    <TextInput style={style.input} value={password} onChangeText={setPassword}/>
                    <MaterialIcons name='remove-red-eye' size={20} color={themas.colors.gray}/>
                </View> */}

            </View>
            <View style={style.boxBottom}>
                {/* <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {
                        loading?
                        <ActivityIndicator color={'#FFFF'} size={'small'}/>
                        :
                        <Text style={style.textButton}>Entrar</Text>}

                </TouchableOpacity> */}

                <Button 
                    text="ENTRAR"
                    loading={loading}
                    onPress={()=>getLogin()}
                />
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora</Text></Text>
        </View>
    )
}