import { useState, useEffect } from 'react';
import CardList from './components/card-list.component';
import SearchInput from './components/search-input.component';
import Monster from './models/monster';
import './App.css';

function App() {
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()) // response: readable stream
            .then((users: Monster[]) => setMonsters(users))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        // The filtering logic only runs when it is relevent.
        const newFilteredMonsters = monsters.filter((monster) =>
            monster.name
                .toLowerCase()
                .includes(searchTerm.trimStart().toLowerCase())
        );
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchTerm]);

    const handleSearchTermChange = (userInput: string) => {
        setSearchTerm(userInput);
    };

    return (
        <div className="app">
            <h1 className="app-title">Monster Rolodex</h1>
            <SearchInput
                placeholder="Search for a Monster"
                searchTerm={searchTerm}
                onInputChange={handleSearchTermChange}
            />
            <CardList monsterList={filteredMonsters} />
        </div>
    );
}

export default App;

