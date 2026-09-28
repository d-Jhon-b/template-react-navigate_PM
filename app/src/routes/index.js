import React,{useState} from "react";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Tela1 from "../View/Tela1";
import Tela2 from "../View/Tela2";
import Tela3 from "../View/Tela3";
import Tela4 from "../View/Tela4";
import TelaDescricao from "../Componentes/TelaDescricao";
import TelaPrincipal from '../Componentes/TelaPrinciapl'
// import { HeaderShownContext } from "@react-navigation/elements";


import PassoSatack from '../Componentes/PasoStack'

const Stack = createNativeStackNavigator()

export default function RoutesBase(){
    return(
        <NavigationIndependentTree>
            <NavigationContainer>
                <Tela1/>
                <Tela2/>
                <Tela3/>
                <Tela4/>
            </NavigationContainer>
        </NavigationIndependentTree>
    )
}



export function Routes(){
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:true}}>
                    <Stack.Screen name="Principal" component={TelaPrincipal} />
                    <Stack.Screen name="Descricao" component={TelaDescricao} />
                    {/* <Stack.Screen name="Tela1" component={Tela1} /> */}
                    <Stack.Screen name="Tela1" options={{ title: 'Tela1' }}>
                        {(Comp) => (
                        <PassoSatack {...Comp} avancar="Tela1">
                            <Tela1/>
                        </PassoSatack>
                        )}
                    </Stack.Screen>

                    <Stack.Screen name="Tela2" component={Tela2} />
                    <Stack.Screen name="Tela3" component={Tela3} />
                </Stack.Navigator>

            </NavigationContainer>
        </NavigationIndependentTree>
    )
}