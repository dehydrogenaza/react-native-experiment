import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import Quiz from './Quiz';

type RootStackParamList = {
    Home: undefined;
    Quiz: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Stack = createStackNavigator<RootStackParamList>();

function HomeScreen({navigation}: Readonly<{ navigation: NavigationProp }>) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Quiz')}>
            <Text style={styles.text}>Pytania do PESu</Text>
            <StatusBar style="auto"/>
        </TouchableOpacity>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: '#fff',
    },
});