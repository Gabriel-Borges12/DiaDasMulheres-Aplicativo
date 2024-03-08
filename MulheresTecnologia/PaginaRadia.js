// GABRIEL BORGES E MARIANE
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PaginaRadia = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.telaHomeImagem} source={require('../MulheresTecnologia/Radia.png')} />
        <Text style={styles.TituloNome}>Radia Perlman</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nasceu}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Nascimento:</Text>
          Nasceu no ano de 1971, no dia 1 de janeiro, em Portsmouth, cidade localizada no estado da Virgínia, nos EUA.
        </Text>
        <Text style={styles.morte}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Morte:</Text>
          Está viva
        </Text>
        <Text style={styles.viveu}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Onde viveu:</Text>
          Perlman cresceu perto de Asbury Park, em Nova Jersey.
        </Text>
        <Text style={styles.formacao}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Formação acadêmica:</Text>
          Iniciou a graduação em Matemática no MIT e aprendeu programação nas aulas de física.
        </Text>
        <Text style={styles.contribuicao}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Relevância e contribuição:</Text>
          Radia Perlman, a cientista que fez a internet funcionar.

          Ela desenvolveu uma versão infantil de linguagem robótica voltada para a educação, que se chamava TORTOS.

          Perlman também atuou no melhoramento dos protocolos de roteamento do sistema intermediário para o intermediário, 
          que serve para rotear o protocolo IP (Internet Protocol).

        </Text>
        <Text style={styles.homenagens}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Homenagens recebidas:</Text>
          No ano de 2014 ela passou a integrar a Internet Hall of Fame e, em 2016, o reconhecimento mais importante: a calçada 
          da fama da National Inventors Hall of Fame.
        </Text>
      </View>
    </View>
  );
};

export default PaginaRadia;

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
