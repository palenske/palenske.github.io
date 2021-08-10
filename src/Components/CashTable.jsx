import React, { useContext } from 'react';
import CashContext from '../Context/CashContext';
import CashField from './CashField';
import NotesField from './NotesField';

export default function CoinsTable() {
  const {
    currency,
    banknote,
    subTotal,
  } = useContext(CashContext);

  const currencyBox = () => {
    return (
      <>
        <h2>Moedas</h2>
        <div className="currencyContainer">
          {currency.map((value, index) => CashField(value, `C${index}`))}
        </div>
      </>
    )
  };

  const banknoteBox = () => {
    return (
      <>
        <h2>Cédulas</h2>
        <div className="banknoteContainer">
          {Object.keys(banknote).map((value, index) => CashField(Number(value), `B${index}`))}
        </div>
      </>
    )
  };

  const notesBox = () => {
    return (
      <>
        <h2>Notas</h2>
        {NotesField()}
      </>
    )
  };

  return (
    <>
      <h3 className={subTotal() > 0 ? 'green-text' : null}>{`Sub-total $${subTotal()}`}</h3>
      {currencyBox()}
      {banknoteBox()}
      {notesBox()}
    </>      
  );
}