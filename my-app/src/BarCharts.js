import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import React, { useState, useEffect } from 'react';

export default function BarCharts({ selectedInstitution }) {
  const [barData, setBarData] = useState([]);
    
    useEffect(() => {
      const url = `https://obsiftm.midi.upt.iftm.edu.br/api/Pesquisadores/FormacaoAcademica?QualInstituicao=${selectedInstitution}&QualFormacao=1`;
      
      fetch(url)
        .then((response) => response.json())
        .then(data => {
          console.log(data); // Verificar os dados recebidos
          // Processar os dados para o formato necessário pelo BarChart
          const processedData = data.map(item => ({
            value: item.qtde,
            label: item.nomeCurso,
            frontColor: '#177AD5',
          }));
          setBarData(processedData);
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
    }, [selectedInstitution]); // Dependência do selectedInstitution para refazer o fetch quando mudar

  return (
    <ScrollView >
      <Text style={styles.title}>Graduações</Text>
      <BarChart
        horizontal
        barWidth={22}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
        height={300} // Ajustar a altura conforme necessário
        maxValue={80}
        stepHeight={35}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
      backgroundColor: '#fff',
      borderWidth: 1, // Linha para verificação de layout
      borderColor: 'red', // Linha para verificação de layout
      //borderWidth: 2, // Adicionar borda ao contêiner
      //borderColor: 'green', // Cor da borda
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 1,
      //borderWidth: 1, // Linha para verificação de layout
      //borderColor: 'blue', // Linha para verificação de layout
    },
});
