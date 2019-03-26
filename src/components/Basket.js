import React, { Component } from 'react';

export default class Basket extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }
    // componentWillMount() {
    //     const basketItems = localStorage.getItem("basketItems");
    //     if (basketItems) {
    //         this.setState({ items: basketItems })
    //     }
    // }

    toggleBasket = () => {
        this.setState(state => ({isOpen: !state.isOpen }));
    }
    render() {
        const {cartItems} = this.props;
        const basketItems = cartItems.map(item => (
            <tr key={item.title}>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>{item.price}</td>
                <td>{item.count * item.price}</td>
            </tr>
        ));

        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "Basket is empty"
                    : <a href="#" onClick={this.toggleBasket}>{`You have ${basketItems.length} items in the basket`}</a>
                }
                {cartItems.length >= 0 &&
                    <table className="table table-responsive" style={{ display: this.state.isOpen ? 'block' : 'none' }}>
                        <thead >
                            <tr><th>Product</th><th>Count</th><th>Price</th><th>Total</th></tr>
                        </thead>
                        <tbody>
                            {basketItems}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Sum</td>
                                <td>{cartItems.reduce((a, c) => (a + c.price * c.count), 0)}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colSpan="2"><button className="btn btn-primary">checkout</button></td></tr>
                        </tfoot>
                    </table>
                }


            </div>
        )
    }
}
