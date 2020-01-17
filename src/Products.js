import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.filterText = "";
        this.state.products = [
            {
                id: 1,
                category: 'Sporting Goods',
                price: '49.99',
                qty: 12,
                name: 'Football'
            }, {
                id: 2,
                category: 'Sporting Goods',
                price: '9.99',
                qty: 15,
                name: 'Baseball'
            }, {
                id: 3,
                category: 'Sporting Goods',
                price: '29.99',
                qty: 14,
                name: 'Basketball'
            }, {
                id: 4,
                category: 'Electronics',
                price: '99.99',
                qty: 34,
                name: 'iPod Touch'
            }, {
                id: 5,
                category: 'Electronics',
                price: '399.99',
                qty: 12,
                name: 'iPhone 5'
            }, {
                id: 6,
                category: 'Electronics',
                price: '199.99',
                qty: 23,
                name: 'Nexus 7'
            }
        ];
    }

    handleUserInput = (filterText) => {
        this.setState({filterText: filterText});
    }

    handleAddEvent = () => {
        const id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        const product = {
            id: id,
            category: '',
            price: '',
            qty: 0,
            name: ''
        }
        this.state.products.push(product);
        this.setState(this.state.products);
    }

    handleRowDel = (product) => {
        const index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    }

    handleProductTable = (evt) => {
        const item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        const products = this.state.products;
        
        const newProducts = products.map(product => {
            for (const key in product) {
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
            }
            return product;
        });
        this.setState(newProducts);
    }
    
    render() {
        return(
            <div style={{padding: 10}}>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
                <ProductTable 
                    onProductTableUpdate={this.handleProductTable}
                    onRowAdd={this.handleAddEvent}
                    onRowDel={this.handleRowDel} 
                    products={this.state.products}
                    filterText={this.state.filterText}/>
            </div>
        );
    }
}

export default Products;