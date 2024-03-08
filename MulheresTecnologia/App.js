// GABRIEL BORGES E MARIANE

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import PaginaSonia from './PaginaSonia'; 
import PaginaRadia from './PaginaRadia';
import PaginaAda from './PaginaAda';
import PaginaGrace from './PaginaGrace';
import PaginaKatherine from './PaginaKatherine';
import PaginaMargaret from './PaginaMargaret';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="PaginaSonia" component={PaginaSonia} />
        <Stack.Screen name="PaginaRadia" component={PaginaRadia} />
        <Stack.Screen name="PaginaAda" component={PaginaAda} />
        <Stack.Screen name="PaginaGrace" component={PaginaGrace} />
        <Stack.Screen name="PaginaKatherine" component={PaginaKatherine} />
        <Stack.Screen name="PaginaMargaret" component={PaginaMargaret} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabBottom = createBottomTabNavigator();
function MyTabs() {
  return (
    <TabBottom.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#B090F9"
      }}>
      <TabBottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name='home' size={20} color={'#B090F9'} />
            } else {
              return <Ionicons name='home-outline' size={20} color={'#B090F9'} />
            }
          },
        }} />
      <TabBottom.Screen
        name="Notícias"
        component={Noticias}
        options={{
          tabBarLabel: "Noticias",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name='newspaper' size={20} color={'#B090F9'} />
            } else {
              return <Ionicons name='newspaper-outline' size={20} color={'#B090F9'} />
            }

          },
        }} />
    </TabBottom.Navigator>
  );
}

function Home({ }) {


  return (
    <ScrollView style={styles.Home}>
      <View style={styles.quemSomosContainer}>
        <Image style={styles.telaHomeImagem} source={require('../MulheresTecnologia/logoshe.png')} />
        <Text style={styles.quemSomos}>Sobre Nós</Text>
      </View>
      <Text style={[styles.historia, { textAlign: 'center' }]}>Nossa História 📰</Text>
      <Text style={[styles.historia2, { textAlign: 'justify' }]}>Há muitos anos, em uma época em que as vozes femininas eram frequentemente abafadas e suas conquistas subestimadas, surgiu uma empresa dedicada a dar destaque ao mundo feminino e suas geniais inovações. Essa empresa, chamada de "She Inspire", nasceu do desejo de seus fundadores, Mariane Letícia e Gabriel Borges, de criar um espaço onde as realizações das mulheres pudessem ser celebradas e compartilhadas com o mundo.</Text>

      {/* Container for the images with flexDirection set to 'row' */}
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.imagensGrid} source={require('../MulheresTecnologia/mulher1.jpg')} />    
          <Image style={styles.imagensGrid} source={require('../MulheresTecnologia/mulher2.avif')} />    
          <Image style={styles.imagensGrid} source={require('../MulheresTecnologia/mulher3.jpg')} />    
          <Image style={styles.imagensGrid} source={require('../MulheresTecnologia/mulher4.avif')} /> 
        </View>
      </ScrollView>
      <Text style={[styles.historia2, { textAlign: 'justify' }]}>A She Inspire começou modestamente, com um site que destacava mulheres empreendedoras, cientistas, artistas, ativistas e líderes que estavam fazendo a diferença em suas comunidades e no mundo. A empresa rapidamente ganhou reconhecimento por sua abordagem inclusiva e sua dedicação em amplificar as vozes das mulheres.</Text>
      <Text style={[styles.historia2, { textAlign: 'justify' }]}>Com o passar dos anos, a She Inspire continuou a crescer e se adaptar às mudanças no cenário midiático e tecnológico.</Text>
    </ScrollView>
  );
}

function Noticias () {
  const navigation = useNavigation();

  const onPress = (nome) => {
    switch (nome) {
      case 'Sônia Guimarães':
        navigation.navigate('PaginaSonia');
        break;
      case 'Radia Perlman':
        navigation.navigate('PaginaRadia');
        break;
      case 'Ada Lovelace':
        navigation.navigate('PaginaAda');
        break;
      case 'Grace Hopper':
        navigation.navigate('PaginaGrace');
        break;
      case 'Katherine Johnson':
        navigation.navigate('PaginaKatherine');
        break;
      case 'Margaret Hamilton':
        navigation.navigate('PaginaMargaret');
        break;
      default:
        break;
    }
  };

  return (
    <>
    <Text style={styles.tituloGenias}>Conheça mais sobre as gênias da semana!</Text>
      <Pressable style={styles.logBox} onPress={() => onPress('Sônia Guimarães')}>
        <Text style={styles.Nomes}>Sônia Guimarães</Text>
      </Pressable>
      <Pressable style={styles.logBox} onPress={() => onPress('Radia Perlman')}>
        <Text style={styles.Nomes}>Radia Perlman</Text>
      </Pressable>
      <Pressable style={styles.logBox} onPress={() => onPress('Ada Lovelace')}>
        <Text style={styles.Nomes}>Ada Lovelace</Text>
      </Pressable>
      <Pressable style={styles.logBox} onPress={() => onPress('Grace Hopper')}>
        <Text style={styles.Nomes}>Grace Hopper</Text>
      </Pressable>
      <Pressable style={styles.logBox} onPress={() => onPress('Katherine Johnson')}>
        <Text style={styles.Nomes}>Katherine Johnson</Text>
      </Pressable>
      <Pressable style={styles.logBox} onPress={() => onPress('Margaret Hamilton')}>
        <Text style={styles.Nomes}>Margaret Hamilton</Text>
      </Pressable>
    </>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B090F9",
    alignItems: "center",
    justifyContent: "center",
  },
  viewPai: {
    flex: 1,
    height: '100%',
  },
  formulario: {
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 10,
  },
  Nomes: {
    fontSize: 17,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  tituloGenias: {
    fontSize: 23,
    color: '#B090F9',
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft:10,
    marginTop: 30,
  },
  botaoEnviar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B090F9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  dadosEnviadosContainer: {
    marginTop: 16,
  },
  dadosEnviados: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  forms: {
    alignContent: "center",
    justifyContent: "center",
    marginTop: 25,
    height: 40,
    width: 400,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 80,
    color: "black",
    backgroundColor: "white",
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 0,
  },
  quemSomosContainer: {
    flexDirection: 'row', // Ajusta o layout para ser em linha (horizontal)
    alignItems: 'center', // Centraliza os itens verticalmente
    marginLeft: 15, // Ajusta o espaçamento à esquerda
  },
  quemSomos: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B090F9',
    marginLeft: 15, // Adiciona espaçamento entre a imagem e o texto
  },
  quemÉ: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B090F9',
    marginLeft: 3, // Adiciona espaçamento entre a imagem e o texto
  },
  telaHomeImagem: {
    width: 150,
    height: 150,
  },
  historia: {
    fontSize: 20,
    color: '#B090F9',
    marginLeft: 15, // Adiciona espaçamento entre a imagem e o texto
    fontWeight: 'medium',
    marginBottom: 5,
  },
  historia2: {
    margin: 10,
    fontWeight: 'medium', // Ajusta o espaç
  },
  imagensGrid: {
    flexDirection: 'row', // Ajusta o layout para ser em linha (horizontal) // Centraliza os itens verticalmente
    width: 150,
    margin: 10,
    height: 150,
  },
  imagem: {
    width: 300,
    height: 300,
  },
  logBox: {
    alignItems: "center",
    padding: 20,
    marginTop: 25,
    margin: 10,
    width: 400,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    borderRadius: 80,
    backgroundColor: '#B090F9',
    color: 'white',
  },
  button: {
    flex: 1, // Ensure LinearGradient takes up the full height
  },
  text: {
    // Add any additional styling for the text inside the LinearGradient if needed
  },
  imagemPerfil: {
    width: 150,
    height: 150,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 120,
    marginTop: 70,
  },
  tituloPerfil: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B090F9',
    marginLeft: 30,
    marginTop: 20,
  },
  textoPerfil: {
    marginTop: 40,
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
  },
  textoInformacoes: {
    margin: 20,
    fontSize: 15,
  },
  tituloNos: {
    fontSize: 30,
    alignItems: 'center',
  },
  textoLogout: {
    marginLeft: 35,
    fontSize: 'medium',
    color: 'green',
  }
});