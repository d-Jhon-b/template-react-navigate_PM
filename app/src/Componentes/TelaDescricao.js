import {View, Button, Text} from 'react-native'
import Estilo from './Estilo'


export default function TelaDescricao({navigation}){
    return(
        <View style={Estilo.textDescricao}>
            <Text style={Estilo.textDescricao1}>Esoclha a tela Rota</Text>
            <Button
                title='Ir para Tela1'
                onPress={()=>navigation.navigate('Tela1')}
            />
            <Button
                title='Ir para Tela2'
                onPress={()=>navigation.navigate('Tela2')}
            />
            <Button
                title='Ir para Tela3'
                onPress={()=>navigation.navigate('Tela3')}
            />
        </View>
    )
}