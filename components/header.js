import  React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props =>{
    
    


    
    return (<View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <View style={styles.userPoints}>
        <Text style={styles.pointsText}>Puntos:{props.points}</Text>
        </View>
        </View>);
} 

const styles = StyleSheet.create({
   header: {
       width: '100%',
       height: 90, 
       paddingTop: 36,
       backgroundColor: Colors.primary,
       alignItems: "center",
       justifyContent: "space-between",
       flexDirection: "row",
       paddingHorizontal:10
   },
   headerTitle: {
     color: 'white',
     fontSize: 18,
     fontWeight: 'bold'
   },
   userPoints: { 
       fontWeight: 'bold',
       backgroundColor: 'white',
       borderRadius: 50,
       padding:5
   },
   pointsText:{
       color: Colors.primary,
       fontWeight: 'bold'
   }
});

export default Header;

