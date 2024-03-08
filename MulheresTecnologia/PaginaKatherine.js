// GABRIEL BORGES E MARIANE
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PaginaKatherine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.telaHomeImagem} source={require('../MulheresTecnologia/Katherine.png')} />
        <Text style={styles.TituloNome}>Katherine Johnson </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nasceu}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Nascimento:</Text>
          Nasceu em 1918 na Virgínia Ocidental.
        </Text>
        <Text style={styles.morte}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Morte:</Text>
          Ela faleceu em um lar de idosos em Newport News em 24 de fevereiro de 2020, com 101 anos de idade.
        </Text>
        <Text style={styles.viveu}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Onde viveu:</Text>
          Viveu principalmente em Hampton, Virginia, nos Estados Unidos.
        </Text>
        <Text style={styles.formacao}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Formação acadêmica:</Text>
          Com facilidade para os números, aos 18 anos, em 1937, estava formada no curso de Matemática e teve como professor W. W. Schieffelin Claytor, importante estudioso no assunto. Ela também foi selecionada para integrar um programa de estudos na Universidade da Virgínia Ocidental.
        </Text>
        <Text style={styles.contribuicao}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Relevância e contribuição:</Text>
          Ela fez contribuições fundamentais para a aeronáutica e exploração espacial dos Estados Unidos, em especial em aplicações da computação na NASA.
        </Text>
        <Text style={styles.homenagens}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Homenagens recebidas:</Text>
          Em 24 de novembro de 2015, o presidente Barack Obama incluiu Katherine na exclusiva lista de dezessete estadunidenses que receberam a Medalha Presidencial da Liberdade e seu nome foi citado como exemplo pioneiro de mulheres negras na ciência, tecnologia, engenharia e matemática.
        </Text>
      </View>
    </View>
  );
};

export default PaginaKatherine;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Alterado para column para organizar em colunas
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row', // Alterado para row para colocar a imagem e o título na mesma linha
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: 10,
    marginLeft: 13, // Ajusta a margem superior entre as linhas de informações
  },
  telaHomeImagem: {
    width: 150,
    height: 150,
  },
  TituloNome: {
    fontSize: 24,
    color: "#B090F9",
    fontWeight: "bold",
    marginLeft: 10, // Adiciona margem para separar a imagem do texto
  },
  nasceu: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10, // Adiciona margem inferior para separar os tópicos
  },
  morte: {
    fontSize: 16,
    marginBottom: 8, // Adiciona margem inferior para separar os tópicos
  },
  viveu: {
    fontSize: 16,
    marginBottom: 8, // Adiciona margem inferior para separar os tópicos
  },
  formacao: {
    fontSize: 16,
    marginBottom: 8, // Adiciona margem inferior para separar os tópicos
  },
  contribuicao: {
    fontSize: 16,
    marginBottom: 8, // Adiciona margem inferior para separar os tópicos
  },
  homenagens: {
    fontSize: 16,
    marginBottom: 8, // Adiciona margem inferior para separar os tópicos
  },
});
