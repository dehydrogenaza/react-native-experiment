import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faThumbsDown, faWineGlass} from "@fortawesome/free-solid-svg-icons";

export default function Quiz() {
  const [result, setResult] = useState<string | null>(null);

  const handleFail = () => {
    setResult('Siadaj, pała');
  };

  const handleSuccess = () => {
    setResult('Nadajesz się na dermę');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pytanie 1</Text>
      <Text style={styles.question}>Grzybica czy uczulenie?</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Grzybica" onPress={handleFail} />
        </View>
        <View style={styles.button}>
          <Button title="Uczulenie" onPress={handleFail} />
        </View>
        <View style={styles.button}>
          <Button title="Albo to, albo to, dam maść na oba" onPress={handleSuccess} />
        </View>
      </View>
      {result && (
          <View style={styles.resultContainer}>
            {result === 'Siadaj, pała' && <FontAwesomeIcon icon={faThumbsDown} size={24} color={"red"}/>}
            {result !== 'Siadaj, pała' && <FontAwesomeIcon icon={faWineGlass} size={24} color={"green"}/>}
            <Text style={result === 'Siadaj, pała' ? styles.fail : styles.success}>{result}</Text>
          </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  fail: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  success: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
});