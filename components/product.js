import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as apiController from '../api/apiController';
import Colors from '../constants/Colors';

const ProductView = props => {

    
    
    const redeemProductHandler=(product) => {
    
       if(props.userPoints < product.cost){
           const dif= product.cost-props.userPoints;
           Alert.alert('Puntos Insuficientes',`Te hacen falta: ${dif}`,[{text:'Ok',style: 'destructive'}]);
           return;
       }

       if(props.userPoints >= product.cost){
        Alert.alert('Confirmación','Seguro que deseas canjear este producto',
        [
         {text:'Aceptar',style: 'default',onPress: props.confirmeReedemHandler},
         {text:'Cancelar',style: 'destructive'}
        ]);
       }
    }
   


    return (
            <TouchableOpacity onPress={redeemProductHandler.bind(this,props.product)}>
            <View style={styles.card}>
            <View style={styles.cardItem}>
                <Image style={styles.image} source={{uri: props.product.img.url}}/>
            </View>
            <View style={styles.cardItem}>
            <View>
            <Text>{props.product.name}</Text>
            </View>
            <View style={ (props.userPoints >= props.product.cost) ? styles.cost : styles.costred}>
            <Text style={styles.costText}>Costo: {props.product.cost}</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>);
}

const styles = StyleSheet.create({
   card: {
    backgroundColor: 'blue',
    shadowColor: 'black',
    shadowOffset: {width:0 , height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    // elevation propetys only work on Android
    elevation: 8,
    marginHorizontal:10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center',
    marginVertical: 5,
    textAlign:"center"
   },
   cardItem: {
       width: "50%",
       alignItems: "center"
   },
   image: {
     width:150,
     height:150
   },
   cost: {
      borderRadius: 50,
      backgroundColor: Colors.accent,
      padding: 5,
      marginTop:5
   },
   costText: {
     color: 'white',
     fontWeight: 'bold'
   },
   costred:{
      borderRadius: 50,
      backgroundColor: '#d9534f',
      padding: 5,
      marginTop: 5
   }
});


export default ProductView;

