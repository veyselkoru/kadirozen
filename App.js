import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NfcCardReader from 'react-native-nfc-card-reader';

export default function App() {


  NfcCardReader.startNfc(function (cardDetails) {
    console.log(cardDetails)
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { }}>
        <Text>START NFC</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
