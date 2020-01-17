import React from 'react';


class EditableCell extends React.Component {

    render() {
        return(
            <td>
                <input style={{padding: 5}} type="text" name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
            </td>
        );
    }
}

export default EditableCell;