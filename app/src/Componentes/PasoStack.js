import React from "react";
import {View, Button} from 'react-native'


export default (Comp)=>{
    <View style={{flex:1}}>
        <View>
            {
                Comp.avancar?
                    (
                    <Button
                        title="Avancar"
                        onPress={()=>{
                            Comp.navigation.navigate(Comp.avancar)
                        }}
                    />
                    )
                    : (false)
            }
            {
                Comp.voltar?
                    (
                    <Button
                        title="Retornar"
                        onPress={()=>{Comp.navigation.goBack()}}
                    />
                    )
                    :(false)
            }
        </View>
        <View style={{ flex: 1}}>{Comp.children}</View>
    </View>
}