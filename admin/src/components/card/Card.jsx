import { MdSupervisedUserCircle } from "react-icons/md";
import "./card.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <MdSupervisedUserCircle size={24} />
      <div className="texts">
        <span className="title">{item.title}</span>
        <span className="number">{item.number}</span>
        <span className="detail">
          <span className={item.change > 0 ? "positive" : "negative"}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous month
        </span>
      </div>
    </div>
  );
};

export default Card;
