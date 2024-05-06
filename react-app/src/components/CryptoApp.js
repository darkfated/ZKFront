import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllCoinsButton from './AllCoinsButton';
import SearchInput from './SearchInput';
import CoinList from './CoinList';
import './CryptoApp.css';

const CryptoApp = () => {
  const [coins, setCoins] = useState([]);
  const [showAllCoins, setShowAllCoins] = useState(false);
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/get_coins_info_small')
      .then(response => {
        const sortedCoins = response.data.sort((a, b) => b.percent_24h - a.percent_24h);
        const top10Coins = sortedCoins.slice(0, 10);
        setCoins(top10Coins);
        setAllCoins(sortedCoins);
      })
      .catch(error => {
        console.error('Ошибка при получении данных о криптовалютах:', error);
      });
  }, []);

  const handleToggleShowAllCoins = () => {
    setShowAllCoins(!showAllCoins);
  };

  useEffect(() => {
    if (showAllCoins) {
      setCoins(allCoins);
    } else {
      const top10Coins = allCoins.slice(0, 10);
      setCoins(top10Coins);
    }
  }, [showAllCoins, allCoins]);

  return (
    <div className="container">
      <div className="search">
        <SearchInput />
      </div>
      <div className="header-text">
        ZaKotirovki
      </div>
      <div className="content">
        <CoinList coins={coins} />
      </div>
      <div className="button">
        <AllCoinsButton onClick={handleToggleShowAllCoins} />
      </div>
    </div>
  );
};

export default CryptoApp;