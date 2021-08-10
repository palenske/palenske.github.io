import React, { useState } from 'react';
import { node } from 'prop-types';
import CashContext from './CashContext';

function CashProvider({ children }) {
  const [total, setTotal] = useState(0.00);
  const [notes, setNotes] = useState([]);
  const [radioCheck, setRadioCheck] = useState('Other');
  const currency = [0.01, 0.05, 0.10, 0.25, 0.50, 1];
  const banknote = {
    2: 'turtle',
    5: 'heron',
    10: 'macaw',
    20: 'tamarin',
    50: 'jaguar',
    100: 'grouper',
    200: 'wolf',
  };

  const handleTotal = (valor, qnt) => {
    setTotal({ ...total, [valor]: qnt });
  };

  const handleNotes = (valor) => {
    setNotes([...notes, [radioCheck, valor]]);
  };

  const deleteNotes = (index) => {
    setNotes(notes.filter((note) => notes.indexOf(note) !== index));
  };

  const subTotal = () => {
    return (
      (Object.entries(total).reduce((acc, next) => acc + (next[0] * next[1]), 0) +
        notes.reduce((acc, next) => acc + Number(next[1]), 0)).toFixed(2));
  };


  const contextValue = {
    total,
    notes,
    currency,
    banknote,
    subTotal,
    handleTotal,
    handleNotes,
    deleteNotes,
    setRadioCheck,
  };

  return (
    <CashContext.Provider value={contextValue}>
      {children}
    </CashContext.Provider>
  );
}

CashProvider.propTypes = { children: node }.isRequired;

export default CashProvider;
