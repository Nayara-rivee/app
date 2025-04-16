// index.tsx
// import React from "react";
// import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// import { ProgressBar } from "react-native-paper";
// import styles from "./styles";

// export default function PainelCliente() {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Olá, João!</Text>

//       {/* Status do Projeto */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Status do Projeto</Text>
//         <Text style={styles.cardSubtitle}>Desenvolvimento do site institucional</Text>
//         <ProgressBar progress={0.6} color="#3B82F6" style={styles.progress} />
//         <Text style={styles.progressText}>60% concluído</Text>
//       </View>

//       {/* Plano Contratado */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Plano Contratado</Text>
//         <Text style={styles.planText}>Plano <Text style={{ fontWeight: "bold" }}>Intermediário</Text>:</Text>
//         <View style={styles.list}>
//           <Text style={styles.listItem}>• Até 5 páginas</Text>
//           <Text style={styles.listItem}>• Design personalizado</Text>
//           <Text style={styles.listItem}>• Responsivo para mobile</Text>
//         </View>
//       </View>

//       {/* Última Mensagem */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Última mensagem da equipe</Text>
//         <View style={styles.messageBox}>
//           <Text><Text style={{ fontWeight: "bold" }}>Equipe:</Text> O layout inicial já está pronto! Aguardamos sua aprovação 😊</Text>
//         </View>
//         <View style={styles.buttonRow}>
//           <TouchableOpacity style={styles.outlineButton}>
//             <Text style={styles.outlineText}>Ver prévia do site</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.filledButton}>
//             <Text style={styles.filledText}>Enviar resposta</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Ações Rápidas */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Ações Rápidas</Text>
//         <View style={styles.actionRow}>
//           <TouchableOpacity style={styles.secondaryButton}>
//             <Text style={styles.secondaryText}>Baixar proposta PDF</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.secondaryButton}>
//             <Text style={styles.secondaryText}>Solicitar alteração</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.secondaryButton}>
//             <Text style={styles.secondaryText}>Ver contrato</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }


// import React from "react";
// import { style } from "./styles";
// import {FlatList, Text, TouchableOpacity, View} from 'react-native'
// import { Input } from "../../components/Input";
// import {MaterialIcons} from 'react-native-vector-icons';
// import { Flag } from "../../components/Flag";
// import { themas } from "../../global/themes";

// type PropCard = {
//   item:number,
//   title:string,
//   description:string,
//   flag:'ver' | 'Ver prévia do site' | 'Enviar Resposta' | 'Plano intermediário'
// }

// const data:Array<PropCard> = [
//   {
//     item:0,
//     title:'Status do Projeto',
//     description:'Desenvolvimento do site institucional:60% concluído',
//     flag:'ver'
//   },
//   {
//     item:1,
//     title:'Plano intermediário',
//     description:'Até 5 páginas, Design personalizado, Responsivo para mobile',
//     flag:'ver'
//   },
//   {
//     item:2,
//     title:'Última mensagem da equipe',
//     description:'O layout inicial já está pronto! Aguardamos sua aprovação',
//     flag:'Ver prévia do site',
//   }
// ]

// export default function painelcli (){

//   const _renderCard = (item:PropCard)=>{

//     return(
//       <TouchableOpacity style={style.card}>
//         <View style={style.rowCard}>
//           <View>
//             <Text>{item.title}</Text> 
//             <Text>{item.description}</Text> 
//             <Flag
//               caption="ver" color={themas.colors.red}

//             />
//           </View>
//           {/* <Flag

//           />         */}
          
//         </View>
//       </TouchableOpacity>
//     )

//   }

//     return(
//         <View style={style.container}>
//             <View style={style.header}>
//                 <Text style={style.greeting}>Bom dia, <Text style={{fontWeight:'bold'}}>Caio E.</Text></Text>
//                 <View style={style.boxInput}>
//                     <Input 
//                         IconLeft={MaterialIcons}
//                         iconLeftName="search"
//                     />
//                 </View>
//             </View> 
//             <View style={style.boxPainelCli}>
//                 <FlatList

//                   data={data}
//                   style={{marginTop:40, paddingHorizontal:30}}
//                   keyExtractor={(item,index)=>item.item.toString()}
//                   renderItem={({item,index})=>{return(_renderCard(item))}}
//                 />


//                 {data?.length >0 &&
//                   (
//                       data.map((item,index)=>{
//                         return <Text key={index}>{item.title}</Text>
//                       })
//                   )
//                 }
//             </View>
//         </View>
//     )
// }


// import React from "react";
// import { View, Text, ScrollView, TouchableOpacity } from "react-native";
// import { ProgressBar } from "react-native-paper";
// import styles from "./styles"; // Certifique-se de que styles.ts está no mesmo diretório

// export default function painelcli() {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Olá, João!</Text>

//       {/* Card: Status do Projeto */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Status do Projeto</Text>
//         <Text style={styles.cardText}>Desenvolvimento do site institucional</Text>
//         <ProgressBar progress={0.6} color="#3b82f6" style={{ height: 10, borderRadius: 5 }} />
//         <Text style={styles.cardText}>60% concluído</Text>
//       </View>

//       {/* Card: Plano Contratado */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Plano Contratado</Text>
//         <Text style={styles.cardText}>Plano Intermediário:</Text>
//         <View style={styles.bulletList}>
//           <Text style={styles.bulletItem}>• Até 5 páginas</Text>
//           <Text style={styles.bulletItem}>• Design personalizado</Text>
//           <Text style={styles.bulletItem}>• Responsivo para mobile</Text>
//         </View>
//       </View>

//       {/* Card: Última mensagem da equipe */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Última mensagem da equipe</Text>
//         <View style={styles.messageBox}>
//           <Text style={styles.messageText}>
//             <Text style={{ fontWeight: "bold" }}>Equipe:</Text> O layout inicial já está pronto! Aguardamos sua aprovação 😊
//           </Text>
//         </View>

//         <View style={styles.buttonRow}>
//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionButtonText}>Ver prévia do site</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionButtonText}>Enviar resposta</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Card: Ações Rápidas */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Ações Rápidas</Text>
//         <View style={styles.buttonRow}>
//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionButtonText}>Baixar proposta PDF</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionButtonText}>Solicitar alteração</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionButtonText}>Ver contrato</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { ProgressBar } from 'react-native-paper';

export default function PainelCliente() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.header}>
                 <Text style={styles.greeting}>Bom dia, <Text style={{fontWeight:'bold'}}>Caio E.</Text></Text>

      </View> 
      {/* Status do Projeto */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Status do Projeto</Text>
        <Text style={styles.cardText}>Desenvolvimento do site institucional</Text>
        <ProgressBar progress={0.6} color="#4F46E5" style={styles.progressBar} />
        <Text style={styles.percentText}>60% concluído</Text>
      </View>

      {/* Plano Contratado */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Plano Contratado</Text>
        <Text style={styles.cardText}>Plano Intermediário:</Text>
        <Text style={styles.cardText}>• Até 5 páginas</Text>
        <Text style={styles.cardText}>• Design personalizado</Text>
        <Text style={styles.cardText}>• Responsivo para mobile</Text>
      </View>

      {/* Última Mensagem */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Última mensagem da equipe</Text>
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>
            <Text style={{ fontWeight: 'bold' }}>Equipe:</Text> O layout inicial já está pronto! Aguardamos sua aprovação 😊
          </Text>
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => navigation.navigate("PreviaSite")}
          >
            <Text style={styles.outlineButtonText}>Ver prévia do site</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate("EnviarMensagem")}
          >
            <Text style={styles.primaryButtonText}>Enviar resposta</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Ações Rápidas */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ações Rápidas</Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Baixar proposta PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Solicitar alteração</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Ver contrato</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

