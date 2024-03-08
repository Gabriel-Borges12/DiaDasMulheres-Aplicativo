// GABRIEL BORGES E MARIANE
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PaginaSonia = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image style={styles.telaHomeImagem} source={require('../MulheresTecnologia/Sonia.png')} />
                <Text style={styles.TituloNome}>Sônia Guimarães</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.nasceu}>
                    <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Nascimento:</Text>
                    26 de junho de 1957 (idade 66 anos), Brotas, São Paulo
                </Text>
                <Text style={styles.morte}>
                    <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Morte:</Text>
                    Está viva
                </Text>
                <Text style={styles.viveu}>
                    <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Onde viveu:</Text>
                    Natural de São Paulo (SP), atualmente vive em São José dos Campos, onde segue lecionando no ITA.
                </Text>
                <Text style={styles.formacao}>
                    <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Formação acadêmica:</Text>
                    Primeira mulher negra doutora em física no Brasil, em 1989, título que a levou
                    a se tornar professora do ITA quando o instituto ainda não aceitava mulheres entre seus alunos, em 1993.
                    Professora Associada I no Instituto de Tecnologia Aeronáutica (ITA) e PhD em física pela Universidade
                    de Manchester (Reino Unido).
                </Text>
                <Text style={styles.contribuicao}>
                    <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Relevância e contribuição:</Text>
                    Lutando contra o racismo de muitas formas, ela se especializou em
                    semicondutores, área que possibilitou o desenvolvimento da tecnologia para celulares. Membra da
                    Associação Brasileira de Pesquisadores Negros (ABPN), uma das fundadoras da organização Avanço do
                    Brasil Negro (ABN).
                </Text>
                <Text style={styles.homenagens}>
                    <Text style={{ fontWeight: 'bold', color: '#B090F9' }}>Homenagens recebidas:</Text>
                    Em maio de 2023, Sonia recebeu a Medalha Santos Dumont de Honra ao Mérito como uma celebração dos
                    seus 30 anos de atuação no ITA. Em novembro de 2023, foi eleita uma das 100 pessoas mais inovadoras
                    da América Latina pela Bloomberg Línea.
                </Text>
            </View>
        </View>
    );
};

export default PaginaSonia;

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
