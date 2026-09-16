import {View, Botton, Text} from 'react-native'
import Estilo from '../Componentes/Estilo'

export default function Tela3(){
    return(
        <View style ={[Estilo.containerBase,{backgroundColor:'#107090'}]}>
            <Text style={Estilo.fontGrande}>
                TELA 1 - HOLA MUNDO
            </Text>
        </View>
    )
}