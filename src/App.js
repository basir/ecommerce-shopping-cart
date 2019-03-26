import React, { Component } from 'react';
import Products from './components/Products';
import Basket from './components/Basket';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { cartItems: [] }
  }
  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      cartItems.push({ ...product, count: 1 });
      return { cartItems: cartItems };
    })
  }
  render() {
    return (
      <div className="container">
        <h1>E-commerce Shopping Cart Application</h1>
        <hr />
        <Basket cartItems={this.state.cartItems} />
        <Products handleAddToCart={this.handleAddToCart} />

      </div>
    );
  }
}

export default App;
