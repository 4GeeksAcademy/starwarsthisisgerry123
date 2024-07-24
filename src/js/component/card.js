import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../card.css"; // Adjusted the path to point to the correct location

const Card = ({ item, type, onFavoriteClick }) => {
    const itemId = item.url.match(/\/([0-9]+)\/$/)[1];

    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/${type}/${itemId}.jpg`}
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {type === 'characters' ? (
                    <p className="card-text">Gender: {item.gender}</p>
                ) : (
                    <p className="card-text">Population: {item.population}</p>
                )}
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/details/${type}/${itemId}`} className="btn btn-primary">Learn more!</Link>
                    <FontAwesomeIcon icon={faHeart} onClick={() => onFavoriteClick(item)} style={{ cursor: "pointer" }} />
                </div>
            </div>
        </div>
    );
};

export default Card;
