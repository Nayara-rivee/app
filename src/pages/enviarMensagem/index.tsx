import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';

export default function EnviarMensagem() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar Mensagem</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem aqui..."
        multiline
        numberOfLines={5}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonOutlineText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
