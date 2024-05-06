import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './CoinInfoPage.css';

const CoinInfoPage = () => {
  const [analysis, setAnalysis] = useState(null);
  const { coinId } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/${coinId}/advanced_analyze`)
      .then(response => {
        setAnalysis(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении анализа криптовалюты:', error);
      });
  }, [coinId]);

  return (
    <div className="coin-info-page">
      {analysis && (
        <>
          <Link to="/" className="coin-info-name">{coinId}</Link>
          <div className="analysis-details">
            <p className="advice">{analysis.advice}</p>
            <p className="current-price">Текущая цена: {analysis.current_price}</p>
            <p className="moving-average">Простое скользящее среднее: {analysis.moving_average}</p>
            <p className="EMA">Экспоненциальное скользящее среднее: {analysis.EMA}</p>
            <p className="RSI">Относительный индекс силы: {analysis.RSI}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CoinInfoPage;