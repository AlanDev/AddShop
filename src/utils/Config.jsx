 import React, { useState } from 'react';
 
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantities, setQuantities] = useState([]);
  
  
    const handleClick = (e) => {
      e.preventDefault();
  
      if (!name || !description || !price) return alert('Todos los campos son obligatorios');
      else {
        const newProduct = { name, description, price };
        setProducts([...products, newProduct]);
  
        const newQuantities = [...quantities, 1];
        setQuantities(newQuantities);
  
        setTotal(total + parseFloat(price));
        setName('');
        setDescription('');
        setPrice('');
      }
    };
  
    const handleIncrement = (index) => {
      const newQuantities = [...quantities];
      newQuantities[index]++;
      setQuantities(newQuantities);
      setTotal(total + parseFloat(products[index].price));
    };
  
    const handleDecrement = (index) => {
      const newQuantities = [...quantities];
      if (newQuantities[index] > 0) {
        newQuantities[index]--;
        setQuantities(newQuantities);
        setTotal(total - parseFloat(products[index].price));
      }
    };


export default Config;