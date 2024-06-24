import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BarCharts from './src/BarCharts.js';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen() {
  const [selectedInstitution, setSelectedInstitution] = useState('0');

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View>
          <Text style={[styles.iftmCampusAvanado, styles.iftmCampusAvanadoTypo]}>
            IFTM Campus Avançado Uberaba Parque Tecnológico
          </Text>
          <Text style={[styles.observatrioIftm, styles.observatrioIftmPosition]}>
            Observatório IFTM
          </Text>
          <Text style={[styles.ministrioDaEducao, styles.iftmCampusAvanadoTypo]}>
            MINISTÉRIO DA EDUCAÇÃO
          </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  container1: {
    left: 10,
  },
  ContainerGrafico: {
    borderWidth: 1,
    borderColor: '#071D41',
    borderRadius: 5,
    width: '95%',
    height: 500,
    padding: 5,
    elevation: 1,  // Este é um atributo adicional para Android
  },  
  formaoAcadmicaDe: {
    fontWeight: "600",
    fontSize: 18,
  },
  observatrioIftmTypo: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: "left",
    color: 'black',
    lineHeight: 24,
    letterSpacing: 0,
  },
  observatrioIftm: {
    // top: 50,
    fontWeight: "600",
    textAlign: "left",
    color: 'black',
    lineHeight: 24,
    letterSpacing: 0,
  },
  observatrioIftmPosition: {
    // left: 17,
    fontWeight: 'bold',
    fontSize: 25,
    padding: 2,
  },
  iftmCampusAvanado: {
    // top: 75,
  },
  iftmCampusAvanadoTypo: {
    // left: 17,
    textAlign: "left",
    color: 'black',
    fontWeight: "400",
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