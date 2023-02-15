import { Component } from 'react';
import './search-input.style.css';

interface SearchInputProps {
    searchTerm: string;
    onInputChange: (searchTerm: string) => void;
    placeholder: string;
    classNames?: string;
}

// More generic, more reusable.
class SearchInput extends Component<SearchInputProps> {
    render() {
        return (
            <input
                className={`search-input ${this.props.classNames}`}
                type="search"
                autoFocus
                placeholder={this.props.placeholder}
                value={this.props.searchTerm}
                onChange={(e) => this.props.onInputChange(e.target.value)}
            />
        );
    }
}

export default SearchInput;
