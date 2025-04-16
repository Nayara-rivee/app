// import { Dimensions, StyleSheet } from "react-native";
// import { themas } from "../../global/themes";

// export const style = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:'center',
//     // backgroundColor:'red',
//   },header:{
//     width:'100%',
//     height:Dimensions.get('window').height/6,
//     backgroundColor:themas.colors.primary,
//     justifyContent:'center',
//     paddingHorizontal:20
//   },
//   greeting:{
//     fontSize:20,
//     color:'#FFF',
//     marginTop:20

//   },
//   boxInput:{
//     width:'80%'
//   },
//   boxPainelCli:{
//     flex:1,
//     width:'100%',
//     // backgroundColor:'red'
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//     elevation: 2,
//     width:'100%',
//     height:100,
//     justifyContent:'center',
//     borderWidth:1,
//     borderColor:themas.colors.lightGray
//   },
//   rowCard:{
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent:'center'
//   }

// })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//     padding: 24,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#1f2937",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//     elevation: 2,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 6,
//     color: "#111827",
//   },
//   cardText: {
//     fontSize: 14,
//     color: "#4b5563",
//     marginBottom: 6,
//   },
//   bulletList: {
//     marginTop: 6,
//     marginLeft: 12,
//   },
//   bulletItem: {
//     fontSize: 14,
//     color: "#4b5563",
//   },
//   messageBox: {
//     backgroundColor: "#ffffff",
//     borderRadius: 8,
//     padding: 12,
//     borderWidth: 1,
//     borderColor: "#d1d5db",
//   },
//   messageText: {
//     fontSize: 14,
//     color: "#1f2937",
//   },
//   buttonRow: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 8,
//     marginTop: 12,
//   },
//   actionButton: {
//     backgroundColor: "#e5e7eb",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     marginRight: 10,
//     marginTop: 6,
//   },
//   actionButtonText: {
//     color: "#111827",
//     fontSize: 14,
//   },
// });

// styles.ts
// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#F3F4F6",
//     flex: 1,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 16,
//     color: "#111827",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 16,
//     elevation: 2,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 4,
//     color: "#1F2937",
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: "#6B7280",
//     marginBottom: 8,
//   },
//   progress: {
//     height: 10,
//     borderRadius: 8,
//   },
//   progressText: {
//     marginTop: 4,
//     fontSize: 12,
//     color: "#6B7280",
//   },
//   planText: {
//     fontSize: 14,
//     color: "#374151",
//   },
//   list: {
//     marginTop: 6,
//   },
//   listItem: {
//     fontSize: 14,
//     color: "#4B5563",
//   },
//   messageBox: {
//     backgroundColor: "#F9FAFB",
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#E5E7EB",
//     marginBottom: 10,
//   },
//   buttonRow: {
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     gap: 10,
//   },
//   outlineButton: {
//     borderWidth: 1,
//     borderColor: "#3B82F6",
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   outlineText: {
//     color: "#3B82F6",
//   },
//   filledButton: {
//     backgroundColor: "#3B82F6",
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     marginLeft: 8,
//   },
//   filledText: {
//     color: "#fff",
//   },
//   actionRow: {
//     gap: 10,
//   },
//   secondaryButton: {
//     backgroundColor: "#E5E7EB",
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     marginTop: 6,
//   },
//   secondaryText: {
//     color: "#374151",
//     fontSize: 14,
//   },
// });

// export default styles;
import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#111827',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3, // para sombra no Android
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111827',
  },
  cardText: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 4,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginTop: 8,
    backgroundColor: '#E5E7EB',
  },
  percentText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  messageBox: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 12,
  },
  messageText: {
    fontSize: 14,
    color: '#374151',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  outlineButton: {
    borderColor: '#4F46E5',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  outlineButtonText: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 10,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  actionsRow: {
    flexDirection: 'column',
    gap: 10,
  },
  secondaryButton: {
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  secondaryButtonText: {
    color: '#1F2937',
    fontWeight: '600',
  },header:{
     width:'100%',
     height:Dimensions.get('window').height/6,
     backgroundColor:themas.colors.primary,
     justifyContent:'center',
     paddingHorizontal:20,
     borderTopLeftRadius:20,
     borderTopEndRadius:20
   },
   greeting:{
     fontSize:20,
     color:'#FFF',
     marginTop:20
   }  
  
});

