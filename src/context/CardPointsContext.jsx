// src/context/CardPointsContext.jsx
import { createContext, useState, useContext } from 'react';

const CardPointsContext = createContext();

export const CardPointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);

  const topUp = (amount) => setPoints(prev => prev + amount);
  const deduct = (amount) => setPoints(prev => prev - amount);

  return (
    <CardPointsContext.Provider value={{ points, topUp, deduct }}>
      {children}
    </CardPointsContext.Provider>
  );
};

export const useCardPoints = () => useContext(CardPointsContext);
