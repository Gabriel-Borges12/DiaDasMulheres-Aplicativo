// GABRIEL BORGES E MARIANE
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PaginaAda = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.telaHomeImagem} source={require('../MulheresTecnologia/Ada.png')} />
        <Text style={styles.TituloNome}>Ada Lovelace</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nasceu}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Nascimento:</Text>
          Nasceu em 10 de Dezembro de 1815, em Londres na Inglaterra.
        </Text>
        <Text style={styles.morte}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Morte:</Text>
          Morreu em 27 de novembro de 1852, Marylebone, Londres, Reino Unido
        </Text>
        <Text style={styles.viveu}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Onde viveu:</Text>
          Viveu na Inglaterra no século XIX.
        </Text>
        <Text style={styles.formacao}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Formação acadêmica:</Text>
          Estudou na Universidade de Cambridge
        </Text>
        <Text style={styles.contribuicao}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Relevância e contribuição:</Text>
          Reconhecida como a primeira programadora da história, Lovelace foi responsável por desenvolver o primeiro algoritmo interpretado por uma máquina.
        </Text>
        <Text style={styles.homenagens}>
          <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Homenagens recebidas:</Text>
          Nenhuma homenagem recebida 
        </Text>
      </View>
    </View>
  );
};

export default PaginaAda;

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
