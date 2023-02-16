import Card from './card.component';
import Monster from '../models/monster';
import './card-list.style.css';

interface CardListProps {
    monsterList: Monster[];
}

const CardList = ({ monsterList }: CardListProps) => {
    return (
        <div className="card-list-container">
            {monsterList.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    );
};

export default CardList;
