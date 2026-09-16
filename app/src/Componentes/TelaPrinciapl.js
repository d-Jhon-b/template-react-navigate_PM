import {View, Button, Text} from 'react-native'
import Estilo from './Estilo'



export default function TelaPrincipal ({navigation}){
    return (
        <View style={Estilo.textPrincipal}>
            <Text style={Estilo.textPrincipal1}>HOME</Text>
             <Button
                title='Ir para Tela2'
                onPress={()=>navigation.navigate('Descricao')}
            />
        </View>
    )

}