import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Alert, TouchableOpacity} from 'react-native';
import Header from './components/header';
import Product from './components/product';
import * as apiController from './api/apiController';
import { render } from 'react-dom';
import Colors from './constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class App extends Component {

  constructor
    (props) {
    super(props); 
    this.state = {
      isLoading: true,
      listProducts: null,
      user: null,
      order: 'mayor'
    }
  }

  getUserInfoHandler(){
    apiController.getUserHandler().then((resp) => {
      this.setState({ user: resp }); 
      this.setState({ isLoading: false });
    });
  }


  setOrderProductList(order,list){
    if(order === 'mayor'){
    return  list.sort((a,b)=> {
          return  b.cost - a.cost;
      });
    }else{
      return  list.sort((a,b)=> {
                        return  a.cost - b.cost;
                         });
    }
  }
 

  componentDidMount() {
    apiController.getProductListHandler().then((resp) => {
      this.getUserInfoHandler();
      const newList=this.setOrderProductList(this.state.order,resp);
      this.setState({ listProducts: newList });
    });
  }

  confirmedReedemHandler = product => {
    apiController.onReedemProductHandler(product._id).then(
        () => {
           Alert.alert('Producto Canjeado',`Producto Canjeado con éxito: ${product.name}`,[{text:'Aceptar',style: 'default'}]);
           this.getUserInfoHandler();
         }
    );
  } 

  onOrderProductoHandler(){
    const orderby = this.state.order === 'mayor'? 'menor' : 'mayor';
    const newList = this.setOrderProductList(orderby,this.state.listProducts);
    this.setState({listProducts: newList});
    this.setState({order: orderby});
  }
  
  
 renderData(){
    return (
         <View>
        
         <View style={styles.containerOrder}> 
         <TouchableOpacity onPress={this.onOrderProductoHandler.bind(this)}>
             <View style={styles.orderItem}>
             <Text style={styles.orderText}>Costo <Icon name={this.state.order === 'mayor'?"chevron-down":'chevron-up'} size={20}/></Text>
             </View>
             </TouchableOpacity>
         </View>
         
         <View style={styles.flatlistcontainer}>
          <FlatList
            data={this.state.listProducts}
            renderItem={({ item }) => <Product confirmeReedemHandler={this.confirmedReedemHandler.bind(this,item)} userPoints={!this.state.isLoading? this.state.user.points : 0} product={item}  />}
            keyExtractor={item => item._id} />
        </View>
        </View> );
 }

 renderLoading(){
   return <ActivityIndicator animating={this.state.isLoading} size="large" color={Colors.accent}/>      
 }

 render() {
    return (
      <View style={styles.screen}>
        <Header points={!this.state.isLoading ? this.state.user.points : 0  } title="Canjear de Productos" />
        {!this.state.isLoading? this.renderData() : this.renderLoading()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  containerOrder:{
    flexDirection: 'row', 
    width: "100%",
    margin:5,
    justifyContent: 'flex-end',
    paddingHorizontal: 20
  },
  orderItem: {
    // backgroundColor: Colors.primary,
    // borderRadius: 50,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    alignContent: "center",
    justifyContent: "center",
    padding:5
  },
  orderText:{
    color: Colors.primary
  },
  flatlistcontainer: {
    marginBottom: 180
  }
});
