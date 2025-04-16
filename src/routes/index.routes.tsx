// import React from "react";
// import {createStackNavigator} from "@react-navigation/stack";
// import Login from "../pages/login";
// import { Header } from "react-native/Libraries/NewAppScreen";
// import BottomRoutes from "./bottom.routes";



// export default function Routes(){
//     const Stack = createStackNavigator()

//     return(
//         <Stack.Navigator
//             initialRouteName="Login"
//             screenOptions={{
//                 headerShown:false,
//                 cardStyle:{
//                     backgroundColor:"#FFF"
//                 }
//             }}
//         >

//             <Stack.Screen
//                 name="Login"
//                 component={Login}
//             />
//             <Stack.Screen
//                 name="BottomRoutes"
//                 component={BottomRoutes}
//             />

//         </Stack.Navigator>
//     )
// }

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import PreviaSite from "../pages/previaSite";
import EnviarMensagem from "../pages/enviarMensagem";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#FFF"
        }
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
      <Stack.Screen name="PreviaSite" component={PreviaSite} />
      <Stack.Screen name="EnviarMensagem" component={EnviarMensagem} />
    </Stack.Navigator>
  );
}
