import React from 'react';


class SearchBar extends React.Component {

    handleChange = () => {
        this.props.onUserInput(this.refs.filterTextInput.value);
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Search..." ref="filterTextInput" value={this.props.filterText} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default SearchBar;