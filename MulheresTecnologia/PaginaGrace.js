// GABRIEL BORGES E MARIANE
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PaginaGrace = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.telaHomeImagem} source={require('../MulheresTecnologia/Grace.png')} />
        <Text style={styles.TituloNome}>Grace Hopper </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nasceu}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Nascimento:</Text>
          Nasceu em Nova York, EUA, em 1906.
        </Text>
        <Text style={styles.morte}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Morte:</Text>
          Morreu em 1 de janeiro de 1992, Condado de Arlington, Virgínia, EUA.
        </Text>
        <Text style={styles.viveu}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Onde viveu:</Text>
          Nova Iorque
        </Text>
        <Text style={styles.formacao}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Formação acadêmica:</Text>
          Terminando em Yale seu mestrado e doutorado na área da matemática em 1930 e 1934 respectivamente.
          Aos 17 entrou para o Tradicional Vassar College, obtendo seu bacharel em matemática e física, no ano de 1928.
        </Text>
        <Text style={styles.contribuicao}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Relevância e contribuição:</Text>
          Criadora das primeiras linguagens computacionais “humanas”, que possibilitou a interpretação computacional de comando 
          em inglês no lugar de apenas números e símbolos.
          Hopper participou da criação do UNIVAC, o primeiro computador digital totalmente eletrônico.

        </Text>
        <Text style={styles.homenagens}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Homenagens recebidas:</Text>
          Em sua carreira militar Hopper, recebeu mais de quarenta diplomas honorários de diversas Universidades.
        </Text>
      </View>
    </View>
  );
};

export default PaginaGrace;

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
