import { Component } from 'react';
import CardList from './components/card-list.component';
import SearchInput from './components/search-input.component';
import './App.css';

interface AppProps {}

interface AppState {
    monsters: { id: string; name: string }[];
    searchTerm: string;
}

class App extends Component<AppProps, AppState> {
    state: AppState;

    constructor(props: AppProps) {
        super(props);
        this.state = { monsters: [], searchTerm: '' };
    }

    handleSearchTermChange = (searchTerm: string) => {
        this.setState({ searchTerm });
    };

    // perfect place for network request
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()) // response: readable stream
            .then((users) => this.setState({ monsters: users }))
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div className="app">
                <SearchInput
                    placeholder="Search for a Monster"
                    searchTerm={this.state.searchTerm}
                    onInputChange={this.handleSearchTermChange}
                />
                <CardList monsterList={this.getFilteredMonsters()} />
            </div>
        );
    }

    getFilteredMonsters() {
        const { searchTerm, monsters } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchTerm)
        );
        return filteredMonsters;
    }
}

export default App;

