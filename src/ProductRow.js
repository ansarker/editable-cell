import React from 'react';
import EditableCell from './EditableCell';


class ProductRow extends React.Component {

    onDelEvent = () => {
        this.props.onDelEvent(this.props.product);
    }

    render() {
        return (
            <tr>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{type: "name", value: this.props.product.name, id: this.props.product.id}}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{type: "price", value: this.props.product.price, id: this.props.product.id}}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{type: "qty", value: this.props.product.qty, id: this.props.product.id}}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{type: "category", value: this.props.product.category, id: this.props.product.id}}/>
                <td>
                    <button onClick={this.onDelEvent}>X</button>
                </td>
            </tr>
        );
    }
}

export default ProductRow;