import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
const logo = require("../assets/shamirilogo.png")


export default function Register() {
    const navigation = useNavigation()
    const [error, setError] = useState([])
    const [data, setData] = useState({
        username:'', email: '', password: ''
    });

    const handleInputChange = (value: string, name: string) => {
        setData({ ...data, [name]: value });
    };

    async function handleSubmit() {
        const response = await fetch('http://localhost:3000/register', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const result = await response.json();

        if (response.ok) {
            navigation.navigate('loginForm');
            setData({username:'', email: '', password: ''})
        } else {
            const errorData: string[] = []
            
            result.errors.forEach((err: { path: string | number ; message: string }) => {
                errorData[err.path] = err.message;
                console.log(err.path);
                
            });
            setError(errorData);

        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image source={logo} style={styles.image} />
            <Text style={styles.title}>Register</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder='YOUR NAME' value={data.username} onChangeText={(text) => handleInputChange(text, 'username')} autoCorrect={false}
                    autoCapitalize='none' />
                    {error.username && <Text style={{color: 'red', padding: 5}}>{error.username}</Text>}
                <TextInput style={styles.input} placeholder='EMAIL' value={data.email} onChangeText={(text) => handleInputChange(text, 'email')} autoCorrect={false}
                    autoCapitalize='none' />
                    {error.email && <Text style={{color: 'red', padding: 5}}>{error.email}</Text>}
                <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={data.password} onChangeText={(text) => handleInputChange(text, 'password')} autoCorrect={false}
                    autoCapitalize='none' />
                    {error.password && <Text style={{color: 'red', padding: 5}}>{error.password}</Text>}
            </View>

            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>
            </View>

            <Text style={styles.footerText}>Already have an account?<Pressable onPress={() => navigation.navigate('loginForm')}><Text style={styles.signup} >  login</Text></Pressable></Text>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 70,
    },
    image: {
        height: 180,
        width: 200,
        objectFit: 'contain',
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 40,
        color: "black"
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 7
    },
    rememberView: {
        width: "100%",
        paddingHorizontal: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 8
    },
    switch: {
        flexDirection: "row",
        gap: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    rememberText: {
        fontSize: 13
    },
    forgetText: {
        fontSize: 11,
        color: "red"
    },
    button: {
        backgroundColor: "#0675bd",
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50
    },
    optionsText: {
        textAlign: "center",
        paddingVertical: 10,
        color: "gray",
        fontSize: 13,
        marginBottom: 6
    },
    mediaIcons: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 23
    },
    icons: {
        width: 40,
        height: 40,
    },
    footerText: {
        textAlign: "center",
        color: "gray",
    },
    signup: {
        color: "indigo",
        fontSize: 15
    }
})