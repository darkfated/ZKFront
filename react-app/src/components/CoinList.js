import React from 'react';
import { Link } from 'react-router-dom';
import './CoinList.css';

const CoinList = ({ coins }) => {
  return (
    <div className="coin-list">
      {coins.map((coin, index) => (
        <Link key={index} to={`/${coin.id}`} className="coin-link">
          <div className="coin-item">
            <div className="coin-icon">
              <img src={coin.icon} alt={coin.name} className="coin-icon-img" />
            </div>
            <div className="coin-info">
              <h3 className="coin-name">{coin.name}</h3>
              <p className="coin-symbol">{coin.symbol}</p>
              <div className="coin-details">
                <p className="coin-price">${coin.price}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CoinList;