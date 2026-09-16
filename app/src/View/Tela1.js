import {View, Botton, Text} from 'react-native'
import Estilo from '../Componentes/Estilo'

export default function Tela1(){
    return(
        <View style ={[Estilo.containerBase,{backgroundColor:'#909010'}]}>
            <Text style={Estilo.fontGrande}>
                TELA 2 - ADEUS MUNDO
            </Text>
        </View>
    )
}