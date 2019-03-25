import React, { Component } from 'react';
import util from '../util'

export default class Basket extends Component {
    toggleBasket = () => {
        this.setState(state => ({ isOpen: !state.isOpen }));
    }
    render() {
        const { cartItems } = this.props;
        const basketItems = cartItems.map(item => (
            <li key={item.id}> <b>{item.title}</b> <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                onClick={(e) => this.props.handleARemoveFromCart(e, item)}>X</button>
                <br />
                {item.count} X {util.formatCurrency(item.price)}

            </li>
        ));

        return (
            <div className="alert alert-info">
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {basketItems.length} items in the basket. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{marginLeft: -25}}>
                            {basketItems}
                        </ul>

                        <b>Sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <button onClick={()=>alert('Todo: Implement checkout page.')}className="btn btn-primary">checkout</button>
                    </div>
                }


            </div>
        )
    }
}
