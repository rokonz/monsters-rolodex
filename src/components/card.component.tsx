import Monster from '../models/monster';
import './card.style.css';

interface CardProps {
    monster: Monster;
}

function Card({ monster: { id, name, email } }: CardProps) {
    return (
        <div className="card">
            <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={name}
            />
            <p className="card__name">{name}</p>
            <a href={`mailto:${email}`} className="card__email">
                {email.toLowerCase()}
            </a>
        </div>
    );
}

export default Card;
