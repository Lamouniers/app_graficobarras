import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  BarCharts from './src/BarCharts';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>olaaaa</Text>
      <StatusBar style="auto" />
      <BarCharts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch', // Permite que o conteúdo ocupe toda a largura
    //justifyContent: 'center',
    borderWidth: 2, // Define a espessura da borda
    borderColor: 'blue', // Define a cor da borda

  },
});
