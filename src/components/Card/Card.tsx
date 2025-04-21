import "./Card.scss";
import { products } from "./products";

const Card = () => {
  return (
    <div className="card">
      <div className="card__info">
        {products.map((item) => (
          <div className="card__block" key={item.id}>
            <img className="card__image" src={item.image} />
            <div className="card__name">{item.name}</div>
            <div className="card__price">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
