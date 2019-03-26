import React, { Component } from 'react';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }
    componentWillMount() {
        fetch('http://localhost:8000/products', {
            headers: {
                contentType: 'application/json'
            }
        }).then(res => res.json())
            .then(data => this.setState({ products: data }));
    }

    render() {
        const productItems = this.state.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href="#">
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                        <div className="caption">
                            <p>{product.title}</p>
                        </div>
                    </a>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
