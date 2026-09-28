import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Estilo from '../src/Componentes/Estilo'
import Tela1 from '../src/View/Tela1'
import Tela2 from '../src/View/Tela2'
import Tela3 from '../src/View/Tela3'
import Tela4 from '../src/View/Tela4'


import { NavigationIndependentTree, NavigationContainer } from '@react-navigation/native';

// import TabViewFatec from  '../src/Componentes/TelaView'
import TabViewFatec from "../src/Componentes/TelaView"

export default function HomeScreen() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <SafeAreaView style={{flex:1}}>
            <TabViewFatec/>
        </SafeAreaView>
      </NavigationContainer>
    </NavigationIndependentTree>
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
