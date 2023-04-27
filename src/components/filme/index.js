    import { StyleSheet } from "react-native";
    import { Button, Image, Text, TouchableOpacity, View } from "react-native-web";
    import { useEffect } from 'react';


    export default function CartaoFilme({filme}){
        
        

    return (
        <View style={styles.viewCartao}>
            <Image style={styles.viewImg}></Image>
            <Text style={styles.titulo}> {filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse}</Text>
            <TouchableOpacity style={styles.btm}>
                <Text> Comprar </Text>
            </TouchableOpacity>
        </View>
    )
    }
    const styles = StyleSheet.create ({
        viewCartao: {
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            padding: 10,
            margin: 3,
            justifyContent: 'flex-start'
        },
        viewImg: {
            width: 100,
            height: 150,
            backgroundColor: 'yellow'
        },
        img: {
            width: '100%',
            height: '100%',
            borderRadius: 10
        },
        viewData: {
            backgroundColor: 'green',
            padding: 10,
            width: '70%',
            height: '100%'
        },
        titulo: {
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold',
            marginBotton: 5
        },
        sinopse: {
            fontSize: 14,
            color: 'white',
            marginBotton: 5
        },
        preco: {
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
            marginBotton: 5
        },
        btm: {
            padding: 10,
            backgroundColor: 'yellow'
        }
        });
        