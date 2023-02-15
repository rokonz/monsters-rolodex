import { Component } from 'react';
import Card from './card.component';
import Monster from '../models/monster';
import './card-list.style.css';

interface CardListProps {
    monsterList: Monster[];
}

interface CardListState {}

class CardList extends Component<CardListProps, CardListState> {
    render() {
        return (
            <div className="card-list-container">
                {this.props.monsterList.map((monster) => (
                    <Card key={monster.id} monster={monster} />
                ))}
            </div>
        );
    }
}

export default CardList;
