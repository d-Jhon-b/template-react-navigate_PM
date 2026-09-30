import {View, Botton, Text} from 'react-native'
import Estilo from '../Componentes/Estilo'

export default function Tela4(){
    return(
        <View style ={[Estilo.containerBase,{backgroundColor:'#bccbb5'}]}>
            <Text style={Estilo.fontGrande}>
                TELA 4
            </Text>
        </View>
    )
}