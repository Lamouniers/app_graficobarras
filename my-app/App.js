import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import  BarCharts from './src/BarCharts';
import {Picker} from '@react-native-picker/picker';
import { Border, FontFamily, FontSize, Color } from "./GlobalStyles";

export default function App() {
  const [selectedInstitution, setSelectedInstitution] = useState('0'); // Estado inicial do dropdown
  return (
    <View style={styles.container}>
      <Image
        style={styles.headerImage}
        source={require('./assets/cabecalho.png')} // Ajuste o caminho conforme necessário
      />
      <View style={styles.container1}>
        <View >
          <Text style={[styles.iftmCampusAvanado, styles.iftmCampusAvanadoTypo]}>IFTM Campus Avançado Uberaba Parque Tecnológico</Text>
          <Text style={[styles.observatrioIftm, styles.observatrioIftmPosition]}>Observatório IFTM</Text>
          <Text style={[styles.ministrioDaEducao, styles.iftmCampusAvanadoTypo]}>MINISTÉRIO DA EDUCAÇÃO</Text>
        </View>

        <Text style={styles.EscolhaCampus}>Escolha o Campus</Text>
        <StatusBar style="auto" />

        <Picker
          selectedValue={selectedInstitution}
          onValueChange={(itemValue) => setSelectedInstitution(itemValue)}
          style={{ height: 50, width: 300 }}
        >
          <Picker.Item label="Todos os Campi" value="0" />
          <Picker.Item label="Campina Verde" value="3" />
          <Picker.Item label="Ituiutaba" value="4" />
          <Picker.Item label="Paracatu" value="5" />
          <Picker.Item label="Patos de Minas" value="6" />
          <Picker.Item label="Patrocínio" value="7" />
          <Picker.Item label="Uberaba" value="2" />
          <Picker.Item label="Uberaba Parque tecnológico" value="1" />
          <Picker.Item label="Uberlândia" value="8" />
          <Picker.Item label="Uberlândia Centro" value="9" />
        </Picker>

        <View style={styles.ContainerGrafico}>
          <Text style={[styles.formaoAcadmicaDe, styles.observatrioIftmTypo]}>
            Formação Acadêmica de Docentes por Campus
          </Text>
          <BarCharts selectedInstitution={selectedInstitution} />
        </View>
      </View>     

      <View style={styles.footer}>
        {/* <Image
          style={styles.footerImage}
          source={require('./assets/rodape.png')} // Ajuste o caminho conforme necessário
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch', // Permite que o conteúdo ocupe toda a largura
    //alignItems: 'center',
    //justifyContent: 'center',
    //borderWidth: 2, // Define a espessura da borda
    //borderColor: 'blue', // Define a cor da borda
  },
  container1: {
    left: 10,
  },
  headerImage: {
    width: '100%', // Ajuste a largura conforme necessário
    height: 150, // Ajuste a altura conforme necessário
    resizeMode: 'contain', // Ajuste o comportamento de redimensionamento conforme necessário
  },
  footer: {
    alignItems: 'center', // Centraliza a imagem no rodapé
    justifyContent: 'flex-end', // Posiciona a imagem no final do contêiner
    marginTop: 'auto', // Faz com que o footer fique no final da tela
    height: 56,
    width: 120,
    backgroundColor: Color.colorblue,
  },
  footerImage: {
    width: '100%', // Ajuste a largura conforme necessário
    height: 100, // Ajuste a altura conforme necessário
    resizeMode: 'contain', // Ajuste o comportamento de redimensionamento conforme necessário
  },
  ContainerGrafico: {
    borderWidth: 1, // Linha para verificação de layout
    borderColor: 'blue', // Linha para verificação de layout
    width: '95%',
    padding: 5,
  },
  textContainer: {
    alignItems: 'flex-start',
    marginLeft: 0,
    marginBottom: 20,
  },
  formaoAcadmicaDe: {
    // top: 12,
    // left: 11,
    fontWeight: "600",
    fontSize: FontSize.headline6_size,
  },
  observatrioIftmTypo: {
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
    fontSize: FontSize.headline6_size,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 24,
    letterSpacing: 0,
  },
  observatrioIftm: {
    // top: 50,
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
    fontSize: FontSize.headline6_size,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 24,
    letterSpacing: 0,
  },
  observatrioIftmPosition: {
    // left: 17,
  },
  iftmCampusAvanado: {
    // top: 75,
  },
  iftmCampusAvanadoTypo: {
    fontSize: FontSize.size_3xs,
    // left: 17,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
  },
  ministrioDaEducao: {
    // top: 100,
    // width: 139,
    // height: 22,
  },
  EscolhaCampus: {
    top: 15,
    left: 17,
  },
});
