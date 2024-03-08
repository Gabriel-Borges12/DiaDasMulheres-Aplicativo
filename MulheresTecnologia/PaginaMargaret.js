// GABRIEL BORGES E MARIANE
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PaginaMargaret = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.telaHomeImagem} source={require('../MulheresTecnologia/Margaret.png')} />
        <Text style={styles.TituloNome}>Margaret Hamilton </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nasceu}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Nascimento:</Text>
          Nasceu em Paoli, Indiana, no dia 17 de agosto de 1936.
        </Text>
        <Text style={styles.morte}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Morte:</Text>
          Margaret ainda está entre nós e ela tem hoje 86 anos.
        </Text>
        <Text style={styles.viveu}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Onde viveu:</Text>
          Boston, Massachusetts
        </Text>
        <Text style={styles.formacao}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Formação acadêmica:</Text>
          Margaret ingressou na Universidade de Michigan, onde se formou em matemática. Posteriormente, ela fez pós-graduação em Meteorologia no MIT (Instituto de Tecnologia de Massachusetts).
        </Text>
        <Text style={styles.contribuicao}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Relevância e contribuição:</Text>
          Em 1961, ela se tornou, aos 25 anos, a primeira engenheira de programação e a primeira mulher a fazer parte do projeto Apollo da NASA, responsável pela missão que levaria o homem a pisar na Lua em 20 de julho de 1969.
        </Text>
        <Text style={styles.homenagens}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Homenagens recebidas:</Text>
          a Google investiu em um tributo dedicado exclusivamente ao retrato de Hamilton — literalmente: a empresa levou à estrutura de energia solar de Ivanpah, no deserto de Mojave, a pouco mais de uma hora (ou 84km) de Las Vegas, Nevada, um total de 107 mil espelhos que, dispostos segundo previu o projeto, formavam a imagem perfeita do rosto de Margareth
        </Text>
      </View>
    </View>
  );
};

export default PaginaMargaret;

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
