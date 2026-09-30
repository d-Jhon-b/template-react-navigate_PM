import { View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


// import Icon from '@react-native-vector-icons/ionicons'
import Icon from "react-native-vector-icons/Ionicons"

import Estilo from '../src/Componentes/Estilo'
import Tela1 from '../src/View/Tela1'
import Tela2 from '../src/View/Tela2'
import Tela3 from '../src/View/Tela3'
import Tela4 from '../src/View/Tela4'

import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation, useNavigationBuilder, NavigationIndependentTree } from '@react-navigation/native';


interface ParamsValues{
  nome:String
  email:String
  password:String
}

function TelaPrincipal(){
  const navigation = useNavigation<DrawerNavigationProp<any>>()
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo ao centro paula souza</Text>
      <Button
        title='Vamos para a Fatec'
        onPress={() => navigation.navigate('Alunos')} 
        />
    </View>
  )
}


function Gremio(){
  return(
    <View style={styles.container2}>
      <Tela1/>
    </View>
  )
}

function Alunos(){
  return(
    <View style={styles.container2}>
      <Tela2/>
    </View>
  )
}
function Professor(){
  return(
    <View style={styles.container2}>
      <Tela1/>
    </View>
  )
}
function Financeiro(){
  return(
    <View style={styles.container2}>
      <Tela4/>
    </View>
  )
}



const Drawer = createDrawerNavigator()

function MenuDrawer()
  {
  return(
    <Drawer.Navigator
      screenOptions={({route})=>({
        drawerIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Principal': // APlicação de cada rota
              iconName = 'home-outline'; //Icone da tela
              break;
            case 'FATEC':
              iconName = 'school-outline';
              break;
            case 'Gremio':
              iconName = 'book-outline';
              break;
            // case 'Tela B':
            //   iconName = 'briefcase-outline';
            //   break;
            case 'Professor':
              iconName = 'people-outline';
              break;
            case 'Financeiro':
              iconName = 'cash-outline';
              break;
            default:
              iconName = 'help-circle-outline'
          
          }
        return <Icon name={iconName}
            size={size}
            color={color} />
        } 
      })}

    >
      <Drawer.Screen 
        name='Principal' 
        component={TelaPrincipal}  
      />
      <Drawer.Screen name='Alunos' component={Alunos}/>
      <Drawer.Screen name='Gremio' component={Gremio}/>
      <Drawer.Screen name='Financeiro' component={Financeiro}/>
      <Drawer.Screen name='Professor' component={Professor}/>    
    </Drawer.Navigator>

  )
}
export default function HomeScreen() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <MenuDrawer/>
      </NavigationContainer>  
    </NavigationIndependentTree>
    // <SafeAreaProvider>
      //   <SafeAreaView style={{flex:1}}>
          
      //     <Tela1/>
      //     <Tela2/>
      //     <Tela3/>
      //     <Tela4/>

      //   </SafeAreaView>
      // </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container:{flex:1, alignItems:'center', justifyContent:"center", backgroundColor:"#cb9999"},
  texto:{fontSize:16, fontWeight:"bold", textAlign:'center'},
  container2:{flex:1}
})


