import React ,{useState, useEffect}from 'react';
import { Text, View, TouchableOpacity,TextInput,ScrollView } from 'react-native';
import estiloItem from './estiloItem';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient'; 


function Item({ navigation, route }) {

    const [item,setItem] = useState({});

    const {operacao,setOperacao} = route.params;
    useEffect(()=>{
        setItem(route.params ? route.params : {})
    },[route.params]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    const salvar = () =>{ }

    const  remover= () =>{ }

   return(

     <View style = {estiloItem.Container}>   
       <View style = {estiloItem.header}>
            <TouchableOpacity onPress={voltar}>
                <MaterialIcons name="arrow-back" size={24} color="white"/>
            </TouchableOpacity>
            <Text style={estiloItem.texto}>Item</Text>
            <Text></Text>
        </View>

            <View style={estiloItem.formularioContainer}>

                <View style={estiloItem.campoContainer}>
                    <FontAwesome5 name="book" size={26} color="#192f6a"/>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Titulo"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={titulo => setItem(...item,titulo)}
                        value={item.titulo}
                    />
                </View>

                <View style={estiloItem.campoContainer}>
                    <FontAwesome5 name="book-reader" size={26} color="#192f6a"/>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Autor"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={titulo => setItem(...item,autor)}
                        value={item.titulo}
                    />
                </View>

                <View style={estiloItem.campoContainer}>
                    <FontAwesome5 name="calendar-alt" size={26} color="#192f6a"/>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Ano de publicação"
                        placeholderTextColor="#FFFFFF"
                        keyboardType="numeric"
                        maxLength={4}
                        onChangeText={titulo => setItem(...item,anoPublicacao)}
                        value={item.anoPublicacao ? item.anoPublicacao.toString() : item.anoPublicacao}
                    />
                </View>
                <View style={estiloItem.campoContainerDescricao}>
                    <FontAwesome5 name="book-open" size={26} color="#192f6a"/>
                    <ScrollView style={estiloItem.campoDescricaoScroll}>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Descricão"
                        placeholderTextColor="#FFFFFF"
                        numberOfLines={4}
                        multiline={true}
                        blurOnSumit={false}
                        onChangeText={titulo => setItem(...item,descricao)}
                        value={item.descricao}
                    />
                     </ScrollView>
                </View> 

                <View style={estiloItem.botoesContainer}>
                    <TouchableOpacity onPress={salvar} style={estiloItem.botaoContainer}>
                    <LinearGradient colors={['#4c669f','#192f6a','#081a31']}>
                        <MaterialIcons name="save" size={28} color="white"/>
                    </LinearGradient>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={remover} style={estiloItem.botaoContainer}>
                    <LinearGradient colors={['#4c669f','#192f6a','#081a31']}>
                        <MaterialIcons name="delete" size={28} color="white"/>
                    </LinearGradient>
                    </TouchableOpacity>

                </View>
                </View>
            
            </View>
   )
}

export default Item;
