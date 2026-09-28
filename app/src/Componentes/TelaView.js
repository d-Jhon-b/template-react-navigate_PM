import React from 'react'
import {
    View, StyleSheet, Dimensions, StatusBar
} from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'

import Tela1 from '../View/Tela1'
import Tela2 from '../View/Tela2'
import Tela3 from '../View/Tela3'
import Tela4 from '../View/Tela4'

// import {RoutesBase} from '../routes/index'


const Rota1=()=>(
    <View style={{flex:1}}>
        <Tela1/>
    </View>
)


const Rota2=()=>(
    <View style={{flex:1}}>
        <Tela2/>
    </View>
)

const Rota3=()=>(
    <View style={{flex:1}}>
        <Tela3/>
    </View>
)

const Rota4=()=>(
    <View style={{flex:1}}>
        <Tela4/>
    </View>
)

export default class TabViewFatec extends React.Component{
    state={
        index:0,
        routes: [
            {key: 'posicao1', title:"Tela1"},
            {key: 'posicao2', title:"Tela2"},
            {key: 'posicao3', title:"Tela3"},
            {key: 'posicao4', title:"Tela4"},
        ],
    };
    render(){
        return(
            <TabView 
                navigationState={this.state}
                renderScene={SceneMap({
                    posicao1:Rota1,
                    posicao2:Rota2,
                    posicao3:Rota3,
                    posicao4:Rota4
                })}
                onIndexChange={
                (index)=>{this.setState({index})}
                }
                initialLayout={{width:Dimensions.get("window").width}}
                style={menu.container}
            />
        )
    }
}

const menu = StyleSheet.create({
    container:{marginTop:StatusBar.currentHeight}
})