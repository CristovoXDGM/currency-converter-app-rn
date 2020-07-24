import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import api from "../services/api.js"
// import { Container } from './styles';
//convert?q=USD_BRL&compact=ultra&apiKey=7afb3281a8b9b3cd6346
const Conversor = ({ moeadaA, moeadaB, sign }) => {

    const [currencyA, setcurrencyA] = useState(moeadaA);
    const [currencyB, setcurrencyB] = useState(moeadaB);
    const [currencyValue, setcurrencyValue] = useState(0);
    const [finalValue, setFinalValue] = useState(0);


    const converter = async () => {
        let de_para = currencyA + "_" + currencyB;
        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=7afb3281a8b9b3cd6346`);
        let cotacao = response.data[de_para];

        let resultado = (cotacao * parseFloat(currencyValue));
        // alert(resultado.toFixed(2));

        setFinalValue(resultado.toFixed(2));
        Keyboard.dismiss();
    }

    useEffect(() => {
        converter();
    }, []);




    return (
        <View style={styles.container}>
            <Text style={styles.titulo} > {moeadaA} para {moeadaB}</Text>
            <TextInput
                style={styles.areaInput}
                placeholder={"Valor a ser convertido"}
                placeholderTextColor="#bbb"
                onChangeText={(currencyB) => setcurrencyValue(currencyB)}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.botaoArea} onPress={converter}>
                <Text style={styles.botaoTexto}>Converter</Text>
            </TouchableOpacity>
            <Text style={styles.valorConvertido}>
                {(finalValue === 0 || finalValue === null) ? '' : sign + finalValue} </Text>
        </View>
    );

}

export default Conversor;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titulo: {
        fontSize: 21,
        fontWeight: "bold",
        color: "#000"
    },
    areaInput: {
        width: Dimensions.get('screen').width / 2,
        height: 45,
        backgroundColor: "#ccc",
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: "#000",
        borderRadius: 5
    },
    botaoArea: {
        width: Dimensions.get('screen').width / 2,
        height: 45,
        backgroundColor: "#014",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    botaoTexto: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center"
    },
    valorConvertido: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#000",
        marginTop: 15
    }
});