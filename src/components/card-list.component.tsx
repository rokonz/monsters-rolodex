import { Component } from 'react';
import './card-list.style.css';

interface CardListProps {
    monsterList: { id: string; name: string }[];
}

interface CardListState {}

class CardList extends Component<CardListProps, CardListState> {
    render() {
        return (
            <div className="card-list-container">
                {this.props.monsterList.map((monster) => (
                    <div key={monster.id} className="card">
                        <img
                            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                            alt={monster.name}
                        />
                        <p>{monster.name}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default CardList;
