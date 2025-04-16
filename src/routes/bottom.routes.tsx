import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import painelcli from '../pages/painelcliente';
import usuario from '../pages/usuario';
import CustomTabBar from '../components/CustomTabBar';
import { AuthProviderPainelCli } from '../context/authContext_painelCli';
const Tab = createBottomTabNavigator();

export default function BottomRoutes(){
  return (
    <AuthProviderPainelCli>
    <Tab.Navigator
      screenOptions={{
        headerShown:false
      }}
      tabBar={pros=><CustomTabBar {...pros}/>}
    >
      <Tab.Screen 
      name="PainelCli" 
      component={painelcli} />
      <Tab.Screen 
      name="Usuario" 
      component={usuario} />
    </Tab.Navigator>

    </AuthProviderPainelCli>
  );
}