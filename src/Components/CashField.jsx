import React, { useContext } from 'react';
import CashContext from '../Context/CashContext';

export default function CashField(value, key) {
  const {
    total,
    banknote,
    handleTotal,
  } = useContext(CashContext);

  return (
    <form key={ key } className={banknote[value]} >
      {`Valor: $${value.toFixed(2)} `}
      <div>
        {'Unidade: '}
        <input
          min={0}
          type="number"
          placeholder="0"
          onChange={ ({ target }) => handleTotal(value, target.value) }
          onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
        />
      </div>
      <span className={total[value] > 0 ? 'green-text' : null}>
        {`Total: $${total[value] ? (total[value]*value).toFixed(2) : '0.00'}`}
      </span>
    </form>
  )
}