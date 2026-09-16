import {View, Botton, Text} from 'react-native'
import Estilo from '../Componentes/Estilo'

export default function Tela2(){
    return(
        <View style ={[Estilo.containerBase,{backgroundColor:'#109010'}]}>
            <Text style={Estilo.fontGrande}>
                TELA 1 - RETORNO MUNDO
            </Text>
        </View>
    )
}