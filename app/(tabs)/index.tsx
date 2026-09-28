import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Estilo from '../src/Componentes/Estilo'
import Tela1 from '../src/View/Tela1'
import Tela2 from '../src/View/Tela2'
import Tela3 from '../src/View/Tela3'
import Tela4 from '../src/View/Tela4'
import Routes from '../src/routes/index'


export default function HomeScreen() {
  return (
    // <Routes/>


    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        
        <Tela1/>
        <Tela2/>
        <Tela3/>
        <Tela4/>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
