import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div class="row">
                <div class="col-md-4">
                    {this.props.count} products found.
            </div>
                <div class="col-md-4">Order by :
               <select value={this.props.sort} onChange={this.props.handleSortChange}>
                        <option value="">Select</option>
                        <option value="lowestprice">Lowest to highest</option>
                        <option value="highestprice">Highest to lowest</option>
                    </select>
                </div>
                <div class="col-md-4">
                    Size  :
               <select value={this.props.size}  onChange={this.props.handleSizeChange}>
                        <option value="">ALL</option>
                        <option value="x">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}
