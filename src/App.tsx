import { Component } from 'react';

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

    // perfect place for network request
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()) // response: readable stream
            .then((users) => {
                this.setState(
                    () => ({ monsters: users }),
                    () => console.log(this.state)
                );
            })
            .catch((err) => console.error(err));
    }

    render() {
        const filteredMonsters = this.state.monsters.filter((monster) =>
            monster.name.toLowerCase().includes(this.state.searchTerm)
        );

        return (
            <div>
                <input
                    type="search"
                    placeholder="Search for a Monster"
                    onChange={(e) => {
                        const searchTerm = e.target.value.toLowerCase();
                        this.setState({ searchTerm });
                    }}
                />
                {filteredMonsters.map((monster) => (
                    <p key={monster.id} style={{ fontSize: 50, color: 'red' }}>
                        {monster.name}
                    </p>
                ))}
            </div>
        );
    }
}

export default App;

