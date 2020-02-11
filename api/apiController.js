import React from 'react';




export const getProductListHandler = () => {
    return fetch('https://coding-challenge-api.aerolab.co/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQxODAwODdkZGVjZDAwNzQyMTJiZGYiLCJpYXQiOjE1ODEzNTA5MjB9.K_AWQmvJdtPU01kU2pxPRaLjeONwHJh3ghrqaUBRzu0'
        }
    })
        .then((response) => response.json())
        .then((responsejson) => { return responsejson; })
        .catch(error => {
            console.error(error);
            throw new Error('Something went wrong!');
        });


}


export const getUserHandler = () => {
    return fetch('https://coding-challenge-api.aerolab.co/user/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQxODAwODdkZGVjZDAwNzQyMTJiZGYiLCJpYXQiOjE1ODEzNTA5MjB9.K_AWQmvJdtPU01kU2pxPRaLjeONwHJh3ghrqaUBRzu0'
        }
    })
        .then((response) => response.json())
        .then((responsejson) => { return responsejson; })
        .catch(error => {
            console.error(error);
            throw new Error('Something went wrong!');
        });


}


export const onReedemProductHandler = (idProduct) => { 
    console.log('Canjear:',idProduct);
    return fetch('https://coding-challenge-api.aerolab.co/redeem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQxODAwODdkZGVjZDAwNzQyMTJiZGYiLCJpYXQiOjE1ODEzNTA5MjB9.K_AWQmvJdtPU01kU2pxPRaLjeONwHJh3ghrqaUBRzu0'
           },
           body: JSON.stringify({
            productId: idProduct
           })
         } )
        .catch(error => {
            console.error(error);
            throw new Error('Something went wrong!');
        });


}