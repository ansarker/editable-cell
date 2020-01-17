import React from 'react';
import ProductRow from './ProductRow';


class ProductTable extends React.Component {

    render() {
        const onProductTableUpdate = this.props.onProductTableUpdate;
        const filterText = this.props.filterText;
        const products = this.props.products;
        const rows = [];

        products.forEach(product => {
            if(product.name.indexOf(filterText) === -1) {
                return;
            }
            rows.push(
                <ProductRow key={product.id} onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={this.props.onRowDel}/>
            );
        });

        // const product = this.props.products.map(product => {
        //     if(product.name.indexOf(filterText) === -1) {
        //         return;
        //     } else {
        //         return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={this.props.onRowDel} key={product.id} />);
        //     }
        // });

        return (
            <div>
                <button onClick={this.props.onRowAdd}>Add</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;